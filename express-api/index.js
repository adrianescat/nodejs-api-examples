const express = require('express');
const app = express();
const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 3000;

// Middleware 1
app.use((req, res, next) => {
  const start = Date.now();
  next(); // Passes to next middleware or route
  // Everything was processed at this point
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
});

// Middleware 2
app.use(express.json()); // Parse JSON

app.get('/', (req, res) => {
  res.send('Hellooo')
})

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


app.get('/author', (req, res) => {
  res.send({id: 1, name: 'Adrian'})
})

// We can make public a folder or assets. This way we can serve sites.
app.use('/site', express.static('public'));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})