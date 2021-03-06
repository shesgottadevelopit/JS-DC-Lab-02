const express = require('express');
const Artist = require('../models/Artists.js');
const artistRouter = express.Router()
const genres = require('../genres.json');
const genre = genres['genres'];

// artist router

// artistRouter.get('/', function( req, res ) {
//     //res.send('placeholder')
// })

artistRouter.get('/add', function ( req, res) {
    res.render('artists/add', {genre})
}).post('/add', function( req, res) {

    const newArtist = new Artist({
        name: req.body.name,
        genre: req.body.genres,
        description: req.body.description,
        imageurl: req.body.imgurl
    })

    if (newArtist.imageurl !== '') {
        return;
    }
    if (newArtist.imageurl === '') {
        // newArtist.imageurl = 'http://via.placeholder.com/350x350'
        newArtist.imageurl = '../img/artist-placeholder-grey.svg'
    }
    newArtist.save()
    res.redirect('/')

    // let newGenre = newArtist.genre
        // newGenre.forEach(function(index) {
        //     console.log(index)
        // })
        //console.log(newArtist)
})

// edit artist path
artistRouter.get('/edit/:id', function( req, res) {
    Artist.findOne({'_id': req.params.id}, function( err, artist) {
        res.render('artists/edit', {artist, genre})
    })
}).post('/edit/:id', function(req, res) {
    Artist.findOne({'_id': req.params.id}, function(err, artist) {
        // add stuff to edit
        artist.name = req.body.name,
        artist.genre = req.body.genres,
        artist.description = req.body.description,
        artist.imageurl = req.body.imgurl


        if (artist.imageurl !== '') {
            return;
        }
        if (artist.imageurl === '') {
            // newArtist.imageurl = 'http://via.placeholder.com/350x350'
            artist.imageurl = '../img/artist-placeholder-grey.svg'
        }

        artist.save();

        res.render('artists/single', {artist})
        //res.redirect(`/artists/${artist._id}`)
    })
})

// view artist path & add comments
artistRouter.get('/:id', function (req, res) {
    Artist.findOne({'_id': req.params.id}, function(err, artist){
        res.render('artists/single', {title: `Artist Page for: ${artist.name}`, artist})
    })
}).post('/:id', function(req, res) {
    Artist.findOne({'_id': req.params.id}, function(err, artist) {
        artist.comments.push({
            commentauthor: req.body.commentauthor,
            commenttext: req.body.commenttext,
            date: Date.now()
        })
        artist.save();
        res.render('artists/single', {artist})
        // res.redirect(`/artists/${artist._id}`)
    })
})

artistRouter.get('/delete/:id', function(req,res) {
    Artist.findOne({'_id': req.params.id}, function(err, artist) {
        artist.remove();
        res.redirect('/')
    })
})

module.exports = artistRouter
