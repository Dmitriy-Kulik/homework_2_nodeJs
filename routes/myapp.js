var express = require('express');
var app = express.Router();

app.get('/:id', function(req, res, next) {
    if(req.params.id == 'console'){
        res.render('console', {title: 'Look in console!'});
        console.log("Hello console!");
    }
    else next();

}, function (req, res, next) {
    if(req.params.id == 'hello'){
        res.render('hello', { title: 'Hello' });
    }
    else next();

}, function (req, res, next) {
    if(req.params.id == 'hi') {
        res.send('Hi world!');
    }
    else res.end('Enter in url console, hello or hi!');
});

module.exports = app;

