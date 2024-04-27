// backend/migrations/create_pokemon_table.js

const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pokedex-bainur',
    password: 'bai005.com',
    port: 5432,
});

pool.query(
    `
    CREATE TABLE IF NOT EXISTS pokemon (
      id SERIAL PRIMARY KEY,
      evolution_id INTEGER NOT NULL,
      name VARCHAR(255) NOT NULL,
      index_number TEXT NOT NULL,
      main_type VARCHAR(100) NOT NULL,
      minor_type TEXT,
      abilities TEXT,
      character TEXT,
      habitat TEXT,
      description TEXT,
      image_title BYTEA,
      image_main BYTEA,
      height TEXT, 
      weight TEXT,
      special_ability TEXT,
      background_gradient TEXT NOT NULL,
      gender VARCHAR(10)
    );
  
    CREATE TABLE IF NOT EXISTS pokemon_icons (
      id SERIAL PRIMARY KEY,
      evolution_id INTEGER REFERENCES pokemon(evolution_id) ON DELETE CASCADE ON UPDATE CASCADE,
      icon_url BYTEA NOT NULL,
      name TEXT NOT NULL,
      stage_order INTEGER NOT NULL
    );
  `,
    (err, res) => {
      if (err) {
        console.error("Ошибка создания таблицы pokemon:", err);
      } else {
        console.log("Таблицы успешно созданы");
      }
      pool.end(); // Закрываем подключение к базе данных после выполнения запроса
    }
  );
  
