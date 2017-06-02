const pgp = require('pg-promise')({});
// this allows us to connect to the database

const config = {
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
};

module.exports = pgp(config);
// this allows us to connect to the database
