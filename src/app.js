'use strict';

var Quotes = require('./models');

var path = require('path');
var express = require('express');
var app = express();
var morgan = require('morgan');
const fs = require('fs');
const repository = require('./models/Repository');

app.use(express.static(path.resolve(__dirname)));
app.use(morgan('combined'));

var PORT = 3000;
var DATA_PATH = path.resolve(__dirname + '/../data', 'quotes.json');
var PAGE_SIZE = 5;

function addTag(req, res) {
  const tag = req.body.tag;
  const number = req.params.number;

  const quote = req.repository.quotes().get(number);
  quote.tag(number, tag);
  res.status(200);
}

function addAllTags(req, res) {
  res.status(200).send(req.repository.tags().all());
}

function addQuote(path, callback) {
  fs.readFile(path, 'utf-8', (error, res) => {
    if (error) callback(error);

    const quotes = new Quotes();
    res = JSON.parse(res);
    for (const quote of res) {
      quotes.add(quote);
    }
    callback(null, quotes);
  });
}

function getQuotes(req, res, query) {
  addQuote(DATA_PATH, function (error, quotes) {
    if (error) throw error;
    var page = req.query.page || 0;
    var skip = page * PAGE_SIZE;
    res.json(quotes.all().splice(skip, PAGE_SIZE));
  });
}

app.use(function (req, res, next) {
  req.repository = repository;
  next();
});

// Quote specific routes
app.route('/api/v1/quotes').get(function (req, res) {
  getQuotes(req, res);
});

app.route('/api/v1/quotes/tags').get(function (req, res) {
  getAllTags(req, res);
});

app.route('/api/v1/quotes/:id/tags').post(function (req, res) {
  addTag(req, res);
});

app.route('/api/v1/quotes/:id/tags').get(function (req, res) {
  getTags(req, res);
});

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../templates', 'index.html'));
});

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});
