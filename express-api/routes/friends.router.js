const express = require('express');
const friendsRouter = express.Router();
// MVC Pattern
const friendsController = require('../controllers/friends.controller');

// We can have specific middlewares for a group of routes
friendsRouter.use((req, res, next) => {
  console.log(`IP address: ${req.ip}`)
  next()
})

friendsRouter.get('/', friendsController.getFriends)
friendsRouter.post('/', friendsController.postFriends)
friendsRouter.get('/:id', friendsController.getFriendById)

module.exports = friendsRouter;