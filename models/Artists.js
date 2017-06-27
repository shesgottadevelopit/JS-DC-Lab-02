const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Comment = require('./Comments.js');

const commentSchema = new Schema({
    commentauthor: String,
    commenttext: String,
    date: Date //https://docs.mongodb.com/manual/reference/method/Date/
});

const artistSchema = new Schema({
    name: String,
    genre: Array,
    description: String,
    comments: [commentSchema],
    imageurl: String,
    // imageurl: {
    //     data: Buffer,
    //     //contentType: String,
    //     url: String
    // }
});

let Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
