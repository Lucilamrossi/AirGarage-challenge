const express = require('express');
const cors = require('cors');

const routes = require('./routes/index.js');
const errorHandler = require('./middlewares/errorHandler');
const { CLIENT_URL } = process.env;

const server = express(); 

server.name = 'API';

server.use(cors({ origin: CLIENT_URL || 'http://localhost:3000', credentials: true }));
server.use('/', routes);
server.use(errorHandler);

module.exports = server;