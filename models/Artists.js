const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const Comment = require('./Comments.js');

const commentSchema = new Schema({
    commentauthor: String,
    commenttext: String,
    date: Date
});

const artistSchema = new Schema({
    name: String,
    genre: Array,
    description: String,
    imageurl: Buffer,
    comments: [commentSchema]

});

let Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
