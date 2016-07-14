var message = require('../controller/message.server.controller');

module.exports = function(app) {
    
    app.route('/').post(message.post).get(message.get);

    app.route('/posts').get(message.getposts).post(message.postmsg);

    app.get('/api/:response', function(req, res){
        res.status(201).send(req.params.response);
    });

    app.param('response', function(req, res, next, id) {
        //console.log(req.params.response);
        next();
    });
};