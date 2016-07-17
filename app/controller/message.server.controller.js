var msg = require('mongoose').model('Message');
var comment = require('mongoose').model('Comment');

exports.post = function(req, res, next)
{
    var message = new msg(req.body);

    message.save(function(err) {
        if (err) {
            var message = getErrorMessage(err);
            return res.redirect('/');
        }
    });

    res.render('index', {message:"Added to database", user: "Username: " + message.user, data: "Message added: " + message.message, date: "Date created: " + message.created});
};

exports.list = function(req,res){
    msg.find().exec(function(err, msgs){
        console.log("LIST: " + msgs);
        if(err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }else{
            res.json(msgs);
        }
    });
};

exports.getcomments = function(req, res, next)
{
    msg.findOne({'_id':req.params}, function(err, msgs) {
        if (err) return next(err);

        res.json(msgs);
    });
};
exports.postcomment = function(req, res, next) 
{
    console.log('posting comment');
    console.log(req.body);
    var comm = new comment();
    comm.user = req.body.commusername;
    comm.comment = req.body.commmessage;
    console.log("comm object: " + comm);

    msg.findOne({'_id':req.body.commid}, function(err, post)
    {   
        if (err) throw err;

        post.comments.push(comm);

        console.log("inside find and after push: " + post);

        post.save(function( err, fin) {
            res.json(post);
        });
        console.log(post);
    });
};


exports.getpostsby = function(req, res, next)
{
    msg.find({'user':req.params}, function(err, msgs) {
       res.json(msgs); 
    });
};

exports.getposts = function(req, res, next)
{
    console.log('return all posts');
    msg.find(function(err, msgs) {
        if (err) return next(err);

        res.json(msgs);
    })
};

exports.postmsg = function(req, res, next)
{
    var message = new msg(req.body);
    message.save(function(err) {
        if (err)
        {
            var message = getErrorMessage(err);
            return res.direction('/');
        }
    });
    res.render('index');
};

exports.get = function(req, res, next)
{
    res.render('index');
    //res.render('index', {message:"", user: "", data: "", date: ""});
};