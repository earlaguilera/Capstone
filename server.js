var express = require('express')
var app = express()
var path = require("path");

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'))
})

app.listen(3000, function () {
  console.log('App listening on port 80!')
})
