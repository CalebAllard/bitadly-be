const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const dbConnection = require('../data/db-config.js');




module.exports = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 10, 
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 60000,
    }),

};