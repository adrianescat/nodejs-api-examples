const express = require('express');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // event loop completly blocked. Try yo open two tabs at the same
    // time and make the /timer request. The second call will run more than
    // 9 seconds because the first one was blocking the event loop
  }
}

app.get('/', (req, res) => {
  res.send('Performance example')
})

app.get('/timer', (req, res) => {
  // delay the response
  delay(9000); // 9 seconds
  res.send('Ding Ding Ding')
})

app.listen(3000);