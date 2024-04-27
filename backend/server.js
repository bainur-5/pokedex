const express = require('express');
const app = express();
const port = 3000;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pokedex-bainur',
  password: 'bai005.com',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно:', res.rows[0]);
  }
});


app.get('/', (req, res) => {
  res.send('Привет, мир!');
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
