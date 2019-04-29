var express = require('express');
var app = express();

app.use(express.static('assets'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	res.sendFile(__dirname+"/assets/img.png");
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});