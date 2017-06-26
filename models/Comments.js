const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: String,
    commenttext: String,
    date: Date
});

let Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
