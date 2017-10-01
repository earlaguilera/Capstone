var express = require('express')
var app = express()
var path = require("path");

//adding body parser and http
var bodyParser = require('body-parser');
var http=require('http');

//setting up port later
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

//API file for interacting with database
var api = require('./server/routes/api');

//Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//defining api location
app.use('/api', api);

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


/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}); */


 app.listen(port, function () {
  console.log('App listening on port ' + port);
}); 
