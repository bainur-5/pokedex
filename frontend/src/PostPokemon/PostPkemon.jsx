import React, { useState } from "react";

const PostPokemon = () => {
  const [formData, setFormData] = useState({
    name: "",
    index_number: 0,
    main_type: "",
    minor_type: "",
    abilities: "",
    character: "",
    habitat: "",
    description: "",
    image_title: "",
    image_main: "",
    height: 0,
    weight: 0,
    special_ability: "",
    background_gradient: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch("http://localhost:3000/api/pokedex", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Покемон создан:", result);
      } else {
        const errorData = await response.json();
        console.error("Ошибка создания покемона:", errorData.error);
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              name="index_number"
              placeholder="Index Number"
              value={formData.index_number}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              name="main_type"
              placeholder="Main Type"
              value={formData.main_type}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              name="minor_type"
              placeholder="Minor Type"
              value={formData.minor_type}
              onChange={handleChange}
            />
          </li>
          <li>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </li>
          <li>
            <textarea
              name="abilities"
              placeholder="Abilities"
              value={formData.abilities}
              onChange={handleChange}
            ></textarea>
          </li>
          <li>
            <textarea
              name="special_ability"
              placeholder="Special Abilities"
              value={formData.special_ability}
              onChange={handleChange}
            ></textarea>
          </li>
          <li>
            <textarea
              name="character"
              placeholder="Character"
              value={formData.character}
              onChange={handleChange}
            ></textarea>
          </li>
          <li>
            <textarea
              name="habitat"
              placeholder="Habitat"
              value={formData.habitat}
              onChange={handleChange}
            ></textarea>
          </li>
          <li>
            <input
              type="text"
              name="height"
              placeholder="Height"
              value={formData.height}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              name="weight"
              placeholder="Weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </li>
          <li>
            <input type="file" name="image_title" onChange={handleChange} />
          </li>
          <li>
            <input type="file" name="image_main" onChange={handleChange} />
          </li>
          <li>
            <input
              type="color"
              name="background_gradient"
              placeholder="Background Gradient"
              value={formData.background_gradient}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </li>
          <li>
            <button type="submit">Upload</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default PostPokemon;
