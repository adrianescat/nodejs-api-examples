const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 8000;

// We can still use node's 'http' built-in functionality and
// pass express listener. This way we can separate logic and organize better
// the project. Also, this allows us to config and receive other connections such as websockets
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}...`);
})


