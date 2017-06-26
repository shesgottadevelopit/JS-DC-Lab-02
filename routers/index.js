const express = require('express');
const Artist = require('../models/Artists.js');
const indexRouter = express.Router()


// index router
indexRouter.get('/', function( req, res ) {
    
    Artist.find({}, function (err, artists) {
        res.render('index', {title: 'Index Page', artists})
    })
})

module.exports = indexRouter;
