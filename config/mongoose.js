var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect('mongodb://ds021289.mlab.com:21289/l1c', {user: 'drkdagron', pass: 'p@ssw0rd'});

    require('../app/models/message.server.model');

    return db;
}