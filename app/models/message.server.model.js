var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
    created: {
        type:Date,
        default: Date.now
    },
    user: {
        type:String
    },
    message: {
        type:String
    }
});

mongoose.model('Message', MessageSchema);