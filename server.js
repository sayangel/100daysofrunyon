var express = require('express'),
ig = require('instagram-node').instagram(),
async = require('async'),
Twit = require('twit'),
request = require('request'),
_ = require('underscore');

var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.static(__dirname));
ig.use({
  access_token: '5d4993b79c3e7697063c0dd5905d4c7f8f4c3a6537150f1688512de7e58bf429'
});

var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var stream; // dat BIG STREAM

var getInstaPics = function(socket) {
};

app.get('/', function(req, res) {

  res.send('Coding something...');
});

var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log("Listening on " + port);
});
