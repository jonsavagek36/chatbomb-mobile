require('./models/db');

let express = require('express');
let app = express();
let smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: '',
    pass: ''
  }
});
let path = require('path');
let bodyParser = require('body-parser');
let nodemailer = require('nodemailer');

let controller = require('./controllers/controller');

let port = 5000;
let http = require('http');
let chatbomb = require('./chatbomb');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mailer Controller
app.get('/send_invite', function(req, res) {
  let mailOptions = {
    to: req.body.to,
    subject: 'Placeholder',
    text: 'Placeholder'
  }
  smtpTransport.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: 'Invite sent!' });
    }
  });
});
app.get('/accept_invite', function(req, res) {
  // Take user to Setup page
});

http.createServer(app).listen(port);
let io = require('socket.io')(http);

io.sockets.on('connection', function(socket) {
  chatbomb.init(io, socket);
});
