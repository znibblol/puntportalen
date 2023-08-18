require('dotenv').config();

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: '../migrations',
    }
});

knex.raw('USE ' + process.env.DB_NAME).then(() => {});

module.exports = knex;
