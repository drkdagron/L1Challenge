var express = require('./config/express');
var mongoose = require('./config/mongoose');
var fs = require('fs');
var https = require('https');
var privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key :privateKey, cert:certificate};

var db = mongoose();
var app = express();

var server = app.listen(3000, function(e) {});
module.exports = server;
var httpsServer = https.createServer(credentials, app);
httpsServer.listen(8443);

console.log("Server running at http://localhost:3000");
console.log("Secure Server running at https://localhost:8443");