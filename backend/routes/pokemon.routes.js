const Router = require('express')
const router = new Router()

const pokemonController = require('../controller/pokemon.controller');

// Маршрут для создания нового покемона
router.post('/', pokemonController.createPokemon);

// Маршрут для получения списка всех покемонов
router.get('/', pokemonController.getAllPokemon);

// Маршрут для получения информации о конкретном покемоне
router.get('/:id', pokemonController.getOnePokemon);

// Маршрут для поиска покемонов по типу
router.get('/type/:type', pokemonController.getPokemonByType);

// Маршрут для обновления информации о покемоне
router.put('/:id', pokemonController.updatePokemon);

// Маршрут для удаления покемона
router.delete('/:id', pokemonController.deletePokemon);

module.exports = router;
