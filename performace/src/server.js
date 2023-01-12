const express = require('express');
const cluster = require('cluster');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // Now, you can try again with 2 tabs in the browser. Remember to disable cache
    // in the network tab. You will see that each request take only 9 seconds, and the 
    // ids in the responses are different
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
  cluster.fork(); // each worker runs the same server.js code
  cluster.fork();
} else {
  console.log('Worker process started');
  // Node will know that workers were created and are ready to listen
  app.listen(3000);
}
