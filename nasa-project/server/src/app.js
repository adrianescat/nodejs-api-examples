const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const app = express();

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

// Middlewares
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(planetsRouter);
app.use(launchesRouter);

// Look at the '/*'. That is for matching any url that was not provided above. So
// that helps React router on the FE to load different routes
// CLIENT-SIDE RENDERING
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;