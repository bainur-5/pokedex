const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pokedex-bainur",
  password: "bai005.com",
  port: 5432,
});

module.exports = pool