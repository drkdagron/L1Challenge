var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect('mongodb://localhost/test');

    require('../app/models/message.server.model');

    return db;
}