## Models

In this application I created an `Artist` model using `artistSchema` and then I created a `commentSchema` that is associated with the `artistSchema`. See below:

### commentSchema
```javascript
const commentSchema = new Schema({
    commentauthor: String,
    commenttext: String,
    date: Date //https://docs.mongodb.com/manual/reference/method/Date/
});
```

### artistSchema
```javascript
const artistSchema = new Schema({
    name: String,
    genre: Array,
    description: String,
    comments: [commentSchema],
    imageurl: String,
});

```
