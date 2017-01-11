var express = require('express')
var app = express()
var path = require('path');
var bodyParser = require('body-parser');


//Register
var router = express.Router();

//Route: Path to load index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//Global controller for Access Control Allow Origin issues for now
app.all('/*',function(req,res,next){
  res.header('Access-Control-Allow-Methods','POST,GET,OPTIONS,PATCH,PUT');
  res.header('Access-Control-Expose-Headers','x-access-token,X-Access-Token,Content-Type');
  res.header('Access-Control-Allow-Origin' , '*' );
  res.header('Access-Control-Allow-Headers' , 'x-access-token,X-Access-Token,Content-Type' );
  next(); // http://expressjs.com/guide.html#passing-route control
});

//Defining port
app.listen(3000, function () {
  console.log('Listening on port 3000!')
});

//Access to directives
app.use(express.static(__dirname + '/directives'));

//Access to controllers
app.use(express.static(__dirname + '/controllers'));

//Access to services
app.use(express.static(__dirname + '/services'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Access to API calls and methods
app.use(require('./server/API-list.js'));

//Not sure if I need this
module.exports = app;


