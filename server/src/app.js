const express = require('express');

// const morgan = require('morgan');

const routes = require('./routes/index.js');
const setHeaders = require('./middlewares/setHeaders.js');
const errorHandler = require('./middlewares/errorHandler');

const server = express(); 

server.name = 'API';

// server.use(express.urlencoded({ extended: true, limit: '50mb' }));
// server.use(express.json());
// server.use(morgan('dev'));
server.use(setHeaders);

server.use('/', routes);

server.use(errorHandler);

module.exports = server;