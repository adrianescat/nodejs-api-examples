const express = require('express');

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

app.listen(3000);
