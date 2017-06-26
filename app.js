const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// data models (is this needed here?)
const Artist = require('./models/Artists.js')

const Comment = require('./models/Comments.js');

// connect to database
mongoose.connect('mongodb://sgdi:happyfeet@rihanna0-shard-00-00-pl4hb.mongodb.net:27017,rihanna0-shard-00-01-pl4hb.mongodb.net:27017,rihanna0-shard-00-02-pl4hb.mongodb.net:27017/tunrapp?ssl=true&replicaSet=Rihanna0-shard-0&authSource=admin')

// defining & activating templating engine
app.engine('handlebars', hbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('public'))


// just a test to see if database is working
// let testObject = new Artist({
//     name: 'Rihanna',
//     genre: 'Pop'
// })
//
// testObject.save()

// connect routers

    //index
    const indexRouter = require('./routers/index.js')
    app.use('/', indexRouter)

    //artists
    const artistRouter = require('./routers/artists.js');
    app.use('/artists/', artistRouter)

    //songs


    //mixtape

// any request of a page that does not have a route will be redirected home
app.get('*', function( req, res ){
      res.redirect('/')
    })


app.listen(3000, function() {
    console.log('listening to andre 3000')
})
