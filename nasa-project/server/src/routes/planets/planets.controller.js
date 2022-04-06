const planets = require('../../models/planets.model');

function getAllPlanets(req, res) {
  // It's a good practice to use `return` statement so we prevent
  // the 'set headers' error and know where the function ends.
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets,
}