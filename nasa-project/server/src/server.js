const http = require('http');
const app = require('./app');
const mongoose = require('mongoose')

const PORT = process.env.PORT || 8000;

const MONGO_URL=`mongodb+srv://nasa-api:0KbGv5Vl9GrkIe8F@nasacluster.wyjzlry.mongodb.net/nasa?retryWrites=true&w=majority`;

const { loadPlanetsData } = require('./models/planets.model');

// We can still use node's 'http' built-in functionality and
// pass express listener. This way we can separate logic and organize better
// the project. Also, this allows us to config and receive other connections such as websockets
const server = http.createServer(app);

// mongoose event emitters
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready');
})

mongoose.connection.on('error', (err) => {
  console.error(err);
})

// Change coming on version 7
mongoose.set('strictQuery', false);

// This is a common pattern to do actions or load data before our server starts
async function startServer() {
  await mongoose.connect(MONGO_URL);

  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
  })
}

startServer();