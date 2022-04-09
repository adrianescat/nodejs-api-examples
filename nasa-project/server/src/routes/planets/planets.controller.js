const { getAllPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
  // It's a good practice to use `return` statement so we prevent
  // the 'set headers' error and know where the function ends.
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
}