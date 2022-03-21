const model = require('../models/friends.model');

function postFriends(req, res ) {
  if (!req.body.name){
    // This return prevents the
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    // So we stop running code here and we don't try to create a new friend
    return res.status(400).json({ error: 'You need to pass a name'});
  }
  
  const newFriend = {
    name: req.body.name,
    id: model.length
  }

  model.push(newFriend);
  res.json(newFriend)
}

function getFriends(req, res) {
  res.json(model)
}

function getFriendById(req, res) {
  const id = Number(req.params.id);
  const friend = model[id];

  if (friend) {
    res.json(model)
  } else {
    res.status(404).json({ error: 'Friend does not exist'})
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriendById,
}