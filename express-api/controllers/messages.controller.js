const path = require('path');

// It's better to use named functions so the debugger can tell us when there is an error
function getMessages(req, res) {
  // using path package to solve absolute path in any scenario or OS
  res.sendFile(path.join(__dirname,'..', 'public', 'images','skimountain.jpeg'))
}

module.exports = {
  getMessages,
}