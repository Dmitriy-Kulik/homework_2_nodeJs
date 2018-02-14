var express = require('express');
var app = express.Router();

app.get('/', function(req, res, next) {
    res.render('hello', { title: 'Hello' });
});

app.get('/hi', function(req, res, next) {
    res.end('Hi world!');
});

app.get('/console', function(req, res, next) {
    res.render('console', {title: 'Look in console!'});
    console.log("Hello console!");
});

module.exports = app;

