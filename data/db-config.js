const knex = require('knex');
const knexconfig = require('../knexfile.js').development;

module.exports = knex(knexconfig);