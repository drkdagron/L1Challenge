var message = require('../controller/message.server.controller');

module.exports = function(app) {
    
    app.route('/').post(message.post).get(message.get);

    app.route('/posts').get(message.getposts).post(message.postmsg);

    app.route('/comments').post(message.postcomment);
    app.route('/comments/:id').get(message.getcomments);
    app.param('id', function(req, res, next, id) {
        req.params = id;
        console.log('comment request is being called');
        next();
    });
    
    app.route('/posts/:userposts').get(message.getpostsby);
    app.param('userposts', function(req, res, next, id) {
        req.params = id;
        next();
    });

    app.get('/api/:response', function(req, res){
        res.status(201).send(req.params.response);
    });

    app.param('response', function(req, res, next, id) {
        //console.log(req.params.response);
        next();
    });
};