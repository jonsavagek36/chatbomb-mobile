let express = require('express');
let app = express();
let path = require('path');

let port = 5000;
let http = require('http').createServer(app).listen(port);

app.use(express.static(path.join(__dirname, 'public')));
