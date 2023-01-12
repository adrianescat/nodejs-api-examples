const express = require('express');
const cluster = require('cluster');
const os = require('os'); // Operative system module

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
  }
}

app.get('/', (req, res) => {
  res.send(`Performance example: ${process.pid}`)
})

app.get('/timer', (req, res) => {
  // delay the response
  delay(9000); // 9 seconds
  res.send(`Ding Ding Ding: ${process.pid}`)
})

if (cluster.isMaster) {
  console.log('Master has been started');

  const NUM_WORKERS = os.cpus().length // Logical cores of the CPU
  
  console.log(`Amount of cores: ${NUM_WORKERS}`);
  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork(); // each worker runs the same server.js code
  }
} else {
  console.log('Worker process started');
  // Node will know that workers were created and are ready to listen
  app.listen(3000);
}
