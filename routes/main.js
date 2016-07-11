var route = function(app) {
app.get('/', function(req, res) {
    res.status(200).send("Hello World");
});

app.get('/api/:response', function(req, res){
    res.status(201).send(req.params.response);
});

app.post('/', jsonParser, function(req, res) {
    
});

app.param('response', function(req, res, next, id) {
    //console.log(req.params.response);
    next();
});
};
module.exports = route;