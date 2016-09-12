
var express = require("express");
var app = express(),
fs = require("fs");

var path    = require("path");
global.appRoot = path.resolve(__dirname);

var mysql = require("mysql");

var cors = require('cors');
var request = require('request');

global.messages = require(appRoot + '/config/messages');
global.config = require(appRoot + '/config/config');


http = require("http").createServer(app);

var uploadedFilePath = "";


var serverDown = '{"error":"503"}';
var internalError = '{"error":"500"}';


app.set('views', __dirname + '/public');

// used below code to render html files
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));

var routePath = ['/day/*'];
app.get(routePath, function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
});

/**
 * Node server is listening on a port defined here.
 **/
http.listen(9000);

global.Sequelize = require("sequelize");



global.sequelize = new Sequelize('recruiter', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


//app.use(require('connect').bodyParser());
bodyParser = require("body-parser");
app.use(bodyParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    if ('OPTIONS' == req.method) {
         res.send(200);
     } else {
         next();
     }
});


/**
 * Node application configuration for all REST urls. This code will set the REST urls to node global variable.
 **/
app.post('/config', function(req, res){
    res.send(req.body.urls);
});

var resources = require('node-resources');
resources.registerRoutes(app, {path: __dirname + "/resources", pattern: "[folder].routes.js"});

    
