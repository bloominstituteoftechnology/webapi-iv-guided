const knex = require('knex');

const environment = process.env.DB_ENV || "development";
const config = require('../knexfile.js').development;

module.exports = knex(config);
