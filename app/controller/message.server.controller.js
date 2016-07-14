var msg = require('mongoose').model('Message');

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

exports.getposts = function(req, res, next)
{
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