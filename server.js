var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.status(200).send("Hello World");
});

var server = app.listen(3000, function(e) {
});

module.exports = server;