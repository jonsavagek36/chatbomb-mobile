require('./models/db');

let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

let controller = require('./controllers/controller');
let mailer = require('./controllers/mailer');

let port = 5000;
let http = require('http');
let chatbomb = require('./chatbomb');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test_users', function(req, res) {
  res.sendFile('./public/test_users.html');
});

app.post('/add_user', controller.add_user);

http.createServer(app).listen(port);
let io = require('socket.io')(http);

io.sockets.on('connection', function(socket) {
  chatbomb.init(io, socket);
});
