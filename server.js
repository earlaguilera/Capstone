var express = require('express')
var app = express()
var path = require("path");

var port = process.env.PORT || 8080;

//app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'))
});

app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/user-profile.html'))
});

app.get('/instructor', function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/instructor.html'))
});

app.get('/social', function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/social.html'))
});

app.get('/test', function (req, res) {
  res.send('hello, world')
});

app.listen(port, function () {
  console.log('App listening on port ' + port);
});
