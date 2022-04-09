const launches = new Map();

let latestFlightNumber = 100;

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

module.exports = {
  launches,
  getAllLaunches,
  addNewLaunch,
}