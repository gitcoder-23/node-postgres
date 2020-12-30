const app = require('express').Router();

// Availing All Required Methods From  Controller For Route

const userInsert = require('./user_insert');

// All Routes for API

app.post('/adduser', userInsert.addUser);

module.exports = app;


















