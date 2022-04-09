const { getAllLaunches, addNewLaunch } = require('../../models/launches.model');

// It's a know pattern to call httpXXX functions those that 
// receives req, res and send a respond
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches()); // The controller uses Data access functions only
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
}