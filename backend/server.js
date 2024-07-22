const express = require("express");
const pokemonRoutes = require('./routes/pokemon.routes');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const sqlQueries = fs.readFileSync('database.sql').toString();
const cors = require('cors');

app.use(cors());
app.use(express.json())
app.use('/api/pokedex', pokemonRoutes);
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

app.use((req, res, next) => {
  console.log(req.method ,req.url)
  next();
}); 