const launches = new Map();

// Data access function
function getAllLaunches() {
  return Array.from(launches.values())
}

module.exports = {
  launches,
  getAllLaunches,
}