var express = require('express');
var app = express();
var path = require("path");
var mongojs=require('mongojs');
var db=mongojs('mongodb://jesse:donthackme@ds051990.mlab.com:51990/mycl123', ['contactlist']);
var bodyparser=require('body-parser');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));
app.use(bodyparser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/index.html'))
});

app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/user-profile.html'))
});

app.get('/instructor', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/instructor.html'))
});

app.get('/social', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/social.html'))
});

app.get('/contactlist', function(req,res) {
  db.contactlist.find(function(err,docs){
      res.json(docs);
  });
  });
  
  app.post('/contactlist', function(req,res){
      db.contactlist.insert(req.body, function(err,doc){
          res.json(doc);
      });
  });



app.listen(port, function () {
  console.log('App listening on port ' + port);
});