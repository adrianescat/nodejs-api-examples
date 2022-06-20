const launches = new Map();

let latestFlightNumber = 100;

function existsLaunchWithId(launchId) {
  return launches.has(launchId)
}

// Data access function
function getAllLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(latestFlightNumber, Object.assign(launch, {
    flightNumber: latestFlightNumber,
    customers: ['ARG'],
    upcoming: true,
    success: true,
  }))
}

function abortLaunchById(launchId) {
  // we get the item we want to 'delete'
  const aborted = launches.get(launchId);

  // we change the status. It's a common pattern to 
  // keep the items using flags to represent their status
  // because that data could be important
  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
}

module.exports = {
  launches,
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
}