import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import PostPokemon from "./PostPokemon/PostPkemon";

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/pokemon", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: "Pikachu",
  //       index_number: "025",
  //       main_type: "Electric",
  //       height: "0.4 m",
  //       weight: "6 kg",
  //       description:
  //         "This Pokémon has electricity-storing pouches on its cheeks...",
  //     }),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error text:", error);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/pokedex")
      .then((res) => res.json())
      .then((r) => console.log(r))
      .catch((error) => console.error("error text:", error));
  }, []);

  // async function createPokemon() {
  //   const newPokemon = {
  //     name: "Pikachu",
  //     index_number: 25,
  //     main_type: "Electric",
  //     minor_type: '',
  //     abilities: "Static",
  //     character: "Friendly",
  //     habitat: "Forest",
  //     description: "Pikachu is an Electric-type Pokémon.",
  //     image_title: '',
  //     image_main: '',
  //     height: 0.4,
  //     weight: 6,
  //     special_ability: "Thunderbolt",
  //     background_gradient: "yellow",
  //     gender: "Male",
  //   };

  //   try {
  //     const response = await fetch('http://localhost:3000/api/pokedex', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(newPokemon)
  //     });

  //     if (response.ok) {
  //       const createdPokemon = await response.json();
  //       console.log('Покемон создан:', createdPokemon);
  //     } else {
  //       const errorData = await response.json();
  //       console.error('Ошибка создания покемона:', errorData.error);
  //     }
  //   } catch (error) {
  //     console.error('Ошибка при отправке запроса:', error);
  //   }
  // }

  // createPokemon();

  // async function deletePokemon() {
  //   try {
  //     const deleteResponse = await fetch(
  //       "http://localhost:3000/api/pokedex/10",
  //       {
  //         method: "DELETE",
  //       }
  //     );
  //     if (deleteResponse.ok) {
  //       const createdPokemon = await deleteResponse.json();
  //       console.log("Покемон создан:", createdPokemon);
  //     } else {
  //       const errorData = await deleteResponse.json();
  //       console.error("Ошибка создания покемона:", errorData.error);
  //     }
  //   } catch (error) {
  //     console.error("Ошибка:", error);
  //   }
  // }
  // deletePokemon()
  return (
    <div className="App">
      <PostPokemon/>
    </div>
  );
}

export default App;
