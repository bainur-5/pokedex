const express = require("express");
const pokemonRoutes = require('./routes/pokemon.routes');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

const sqlQueries = fs.readFileSync('database.sql').toString();


// pool.query("SELECT NOW()", (err, res) => {
//   if (err) {
//     console.error("Ошибка подключения к базе данных:", err);
//   } else {
//     console.log("Подключение к базе данных успешно:", res.rows[0]);
//   }
// });
// Middleware для обработки запросов OPTIONS
// app.options('*', (req, res) => {
//   res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.set('Access-Control-Allow-Headers', 'Content-Type');
//   res.status(200).end();
// });


app.use(express.json())
app.use('/api/pokemon', pokemonRoutes);
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

