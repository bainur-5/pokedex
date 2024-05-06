const Router = require('express')
const router = new Router()

const pokemonController = require('../controller/pokemon.controller');

// Маршрут для создания нового покемона
router.post('/pokemon', pokemonController.createPokemon);

// Маршрут для получения списка всех покемонов
router.get('/pokemon', pokemonController.getAllPokemon);

// Маршрут для получения информации о конкретном покемоне
router.get('/pokemon/:id', pokemonController.getOnePokemon);

// Маршрут для поиска покемонов по типу
router.get('/pokemon/type/:type', pokemonController.getPokemonByType);

// Маршрут для обновления информации о покемоне
router.put('/pokemon/:id', pokemonController.updatePokemon);

// Маршрут для удаления покемона
router.delete('/pokemon/:id', pokemonController.deletePokemon);

module.exports = router;
