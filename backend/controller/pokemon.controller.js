// pokemonController.js

const pool = require("../db");

async function createPokemon(req, res) {
  const {
    name,
    index_number,
    main_type,
    minor_type,
    abilities,
    character,
    habitat,
    description,
    image_title, // Данные должны быть в формате base64 или бинарные
    image_main,  // Данные должны быть в формате base64 или бинарные
    height,
    weight,
    special_ability,
    background_gradient,
    gender,
  } = req.body;

  // Проверка обязательных полей
  if (!name || !index_number || !main_type || !description) {
    return res
      .status(400)
      .json({ error: `Необходимо заполнить все обязательные поля, ${name}, ${index_number}, ${main_type}, ${description} `});
  }

  try {
    // Конвертация изображений в Buffer
    const imageTitleBuffer = image_title ? Buffer.from(image_title, 'base64') : null;
    const imageMainBuffer = image_main ? Buffer.from(image_main, 'base64') : null;

    // Выполнение запроса к базе данных для создания нового покемона
    const result = await pool.query(
      `INSERT INTO pokemon (
        name, index_number, main_type, minor_type, abilities, character, habitat, description,
        image_title, image_main, height, weight, special_ability, background_gradient, gender
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
      ) RETURNING *`,
      [
        name, index_number, main_type, minor_type, abilities, character, habitat, description,
        imageTitleBuffer, imageMainBuffer, height, weight, special_ability, background_gradient, gender
      ]
    );

    res.status(201).json(result.rows[0]); // Возвращаем созданный покемон
  } catch (error) {
    console.error("Ошибка при создании нового покемона:", error);
    res.status(500).json({ error: "Ошибка сервера :", error });
  }
}

async function getAllPokemon(req, res) {
    
  pool.query("SELECT * FROM pokemon", (err, result) => {
    if (err) {
      console.error(
        "Ошибка при получении списка покемонов из базы данных:",
        err
      );
      res.status(500).json({ error: "Ошибка сервера" });
    } else {
      res.json(result.rows);
    }
  });
}

async function getOnePokemon(req, res) {
  const pokemonId = req.params.id;
  pool.query(
    "SELECT * FROM pokemon WHERE id = $1",
    [pokemonId],
    (err, result) => {
      if (err) {
        console.error(
          "Ошибка при получении информации о покемоне из базы данных:",
          err
        );
        res.status(500).json({ error: "Ошибка сервера" });
      } else {
        if (result.rows.length === 0) {
          res.status(404).json({ error: "Покемон не найден" });
        } else {
          res.json(result.rows[0]);
        }
      }
    }
  );
}

async function getPokemonByType(req, res) {
    const { type } = req.params;
  
    try {
      const result = await pool.query(
        "SELECT * FROM pokemon WHERE main_type = $1 OR minor_type = $1",
        [type]
      );
  
      res.json(result.rows);
    } catch (error) {
      console.error("Ошибка при поиске покемонов по типу:", error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  

async function updatePokemon(req, res) {
  const pokemonId = req.params.id;
  const {
    name,
    index_number,
    main_type,
    minor_type,
    abilities,
    character,
    habitat,
    description,
    image_title,
    image_main,
    height,
    weight,
    special_ability,
    background_gradient,
    gender,
  } = req.body; // Предполагается, что данные приходят в теле запроса

  // Проверка существования покемона
  const existingPokemon = await pool.query(
    "SELECT * FROM pokemon WHERE id = $1",
    [pokemonId]
  );
  if (existingPokemon.rows.length === 0) {
    return res.status(404).json({ error: "Покемон не найден" });
  }

  try {
    // Выполнение запроса к базе данных для обновления информации о покемоне
    const result = await pool.query(
      "UPDATE pokemon SET name = $1, index_number = $2, main_type = $3, minor_type = $4, abilities = $5, character = $6, habitat = $7, description = $8, image_title = $9, image_main = $10, height = $11, weight = $12, special_ability = $13, background_gradient = $14, gender = $15 WHERE id = $16 RETURNING *",
      [
        name,
        index_number,
        main_type,
        minor_type,
        abilities,
        character,
        habitat,
        description,
        image_title,
        image_main,
        height,
        weight,
        special_ability,
        background_gradient,
        gender,
        pokemonId,
      ]
    );

    res.json(result.rows[0]); // Возвращаем обновлённый покемон
  } catch (error) {
    console.error("Ошибка при обновлении информации о покемоне:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
}

async function deletePokemon(req, res) {
  const pokemonId = req.params.id;

  // Проверка существования покемона
  const existingPokemon = await pool.query(
    "SELECT * FROM pokemon WHERE id = $1",
    [pokemonId]
  );
  if (existingPokemon.rows.length === 0) {
    return res.status(404).json({ error: "Покемон не найден" });
  }

  try {
    // Выполнение запроса к базе данных для удаления покемона
    await pool.query("DELETE FROM pokemon WHERE id = $1", [pokemonId]);

    res.json({ message: "Покемон успешно удалён" });
  } catch (error) {
    console.error("Ошибка при удалении покемона:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
}

module.exports = {
  createPokemon,
  getAllPokemon,
  getOnePokemon,
  updatePokemon,
  deletePokemon,
  getPokemonByType
};
