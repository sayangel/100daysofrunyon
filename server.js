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
  access_token: '31053657.6641612.791281325ada43b388f32ce913603161'
});

var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var stream; // dat BIG STREAM

var getInstaPics = function(socket) {
};

app.get('/', function(req, res) {

    var getIG = function(err, result, pagination, limit) {
      var initialData = [];
      //console.log(err);
      //console.log(pagination);
      //console.log(result);
      for(var i = 0; i < result.length; i++)
      {
        var imgURL = result[i].images.standard_resolution.url;
        console.log(imgURL);  
        initialData.push(result[i]);
      }
      /*if(pagination.next)
      {
        pagination.next(getIG);
      }*/

      //After gathering image URLs send them over to the page
      console.log(initialData);
      res.render('index.ejs', {data: initialData});
    
    };

  //Get pictures tagged at Runyon Canyon
  //Can add additional gets such as tagged #runyon #100daysofrunyon or geotagged: runyon canyon park
  ig.location_media_recent('144304', getIG); 


  //res.send('Coding something...');
});

var port = process.env.PORT || 5000;
server.listen(port, function() {
  console.log("Listening on " + port);
});
