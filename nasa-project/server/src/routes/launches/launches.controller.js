const { getAllLaunches, addNewLaunch, existsLaunchWithId, abortLaunchById } = require('../../models/launches.model');

// It's a know pattern to call httpXXX functions those that 
// receives req, res and send a respond
function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches()); // The controller uses Data access functions only
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  // We check if the data sent by the client is correct. We can use third libraries for this
  if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
    return res.status(400).json({
      error: 'Missing required launch property'
    })
  }

  launch.launchDate = new Date(launch.launchDate);

  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid launch date'
    })
  }


  addNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  if (!existsLaunchWithId(launchId)) {
    return res.status(400).json({
      error: 'Launch not found',
    })
  }

  const aborted = abortLaunchById(launchId)

  return res.status(200).json(aborted)
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
}