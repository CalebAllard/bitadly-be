const knex = require('knex');
const environment = process.env.ENVIRONMENT ||'development'
const knexconfig = require('../knexfile.js')[environment];

module.exports = knex(knexconfig);