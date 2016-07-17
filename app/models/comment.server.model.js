var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    created: {
        type:Date,
        default: Date.now
    },
    user: {
        type:String
    },
    comment: {
        type:String
    }
});

mongoose.model('Comment', CommentSchema);