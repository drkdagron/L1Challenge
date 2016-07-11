var express = require('./config/express');
var mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();

var server = app.listen(3000, function(e) {});
module.exports = server;

console.log("Server running at http://localhost:3000");