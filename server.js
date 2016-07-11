var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use('view-engine', 'ejs');

app.get('/', function(req, res) {
    res.status(200).send("Hello World");
});

app.get('/api/:response', function(req, res){
    res.status(201).send(req.params.response);
});

app.param('response', function(req, res, next, id) {
    //console.log(req.params.response);
    next();
});

var server = app.listen(3000, function(e) {
});

module.exports = server;