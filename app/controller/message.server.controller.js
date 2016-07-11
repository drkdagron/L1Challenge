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

exports.get = function(req, res, next)
{
    res.render('index', {message:"Nothing Entered", data: "", date: "", user:""});
};