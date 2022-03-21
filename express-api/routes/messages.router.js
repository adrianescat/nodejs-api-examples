const express = require('express');
const messagesRouter = express.Router();
// MVC Pattern
const messagesController = require('../controllers/messages.controller');

messagesRouter.get('/', messagesController.getMessages)

module.exports = messagesRouter;