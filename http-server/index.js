const http = require('http');

const PORT = 3000;

const server = http.createServer()

const friends = [
  {
    id: 0,
    name: 'Tesla'
  },
  {
    id: 0,
    name: 'Newton'
  },
  {
    id: 0,
    name: 'Musk'
  },
]

// This is a proof of concept, it's far away from production code
server.on('request', (req, res) => { // req is a readable stream and req a writable stream
  const path = req.url.split('/');

  if (req.method === 'GET' && path[1] === 'author') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(JSON.stringify({
      name: 'Adrian',
      job: 'Software Engineer'
    }))
  } else if (req.method === 'GET' && path[1] === 'ping') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('pong')
  } else if (req.method === 'GET' && path[1] === '') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('Hello!!')
  } else if (req.method === 'GET' && path[1] === 'friends') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    
    if (path.length === 3) {
      const index = Number(path[2]);
      res.end(JSON.stringify(friends[index]))
    } else {
      res.end(JSON.stringify(friends))
    }
  } else if (req.method === 'POST' && path[1] === 'friends') {
    req.on('data', (data) => {
      const newFriend = data.toString() // we need to convert stream (bytes) to string
      console.log('Request', newFriend)
      friends.push(JSON.parse(newFriend))
    })
    req.pipe(res) // we share the stream data to other with pipe. In this case we pass req data to res.
  } else {
    // Other way to write headers
    res.statusCode = 404;
    res.end();
  }
})

server.listen(PORT, () => {
  console.log('HTTP server listening')
  console.log('go to http://localhost:3000/')
});