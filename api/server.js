// requires
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const sessionConfig = require('../util/session-config.js');
//Routers
const authRouter = require('../authentication/auth');
const urlsRouter = require('../api/urls/url');
const userRouter = require('../api/users/users');
const redirectRouter = require('../api/redirect/redirect');
// app start
const server = express();
// middleware
server.use(session(sessionConfig));
server.use(cors());
server.use(express.json());
//
server.use((req,res,next) => {
    console.log(`${req.headers.host}${req.originalUrl} from: ${req.headers.origin} @ ${Date(Date.now()).toString()}`);
    next();
})
//api endpoints
server.use('/auth', authRouter);
server.use('/urls', urlsRouter);
server.use('/users', userRouter);
server.use('/', redirectRouter);
module.exports = server;