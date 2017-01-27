'use strict';

var _models = require('./models');

var path = require('path');
var express = require('express');
var app = express();
var morgan = require('morgan');

var PUBLIC = path.resolve(__dirname);

app.use('/js', express.static(path.resolve(__dirname, 'js')));
app.use(express.static(PUBLIC));
app.use(morgan('combined'));

var PORT = 3000;
var DATA_PATH = path.resolve(__dirname, 'quotes.json');
var PAGE_SIZE = 5;

function getQuotes(req, res, query) {
  new _models.QuoteDesc(DATA_PATH, function (err, model) {
    if (err) throw err;
    var quotes = model.all();
    var page = req.query.page || 0;
    var skip = page * PAGE_SIZE;
    res.json(quotes.splice(skip, PAGE_SIZE));
  });
}

// Quote specific routes
app.route('/api/v1/quotes').get(function (req, res) {
  getQuotes(req, res);
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//The 404 Route (ALWAYS Keep this as the last route)
/*
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html');
});
*/

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});
