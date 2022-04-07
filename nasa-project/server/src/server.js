const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000;

const { loadPlanetsData } = require('./models/planets.model');

// We can still use node's 'http' built-in functionality and
// pass express listener. This way we can separate logic and organize better
// the project. Also, this allows us to config and receive other connections such as websockets
const server = http.createServer(app);

// This is a common pattern to do actions or load data before our server starts
async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
  })
}

startServer();