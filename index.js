let express = require('express');
let app = express();
let path = require('path');

let port = 5000;
let http = require('http').createServer(app).listen(port);
let io = require('socket.io')(http);
let chatbomb = require('./chatbomb');

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', function(socket) {
  chatbomb.init(io, socket);
});
