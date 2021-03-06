require('./models/db');

let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

let controller = require('./controllers/controller');
let mailer = require('./controllers/mailer');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 5000;
let http = require('http').createServer(app).listen(port);
let chatbomb = require('./chatbomb');

let io = require('socket.io')(http);

io.sockets.on('connection', function(socket) {
  chatbomb.init(io, socket);
});
