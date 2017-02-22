'use strict';

const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const repository = require('./models/Repository');
const app = express();
const router = express.Router();
var Quotes = require('./models');

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

router.get('/quotes', (req, res) => {
  getQuotes(req, res);
});

router.get('/quotes/tags', (req, res) => {
  getAllTags(req, res);
});

router.get('/quotes/:id/tags', (req, res) => {
  getTags(req, res);
});

router.post('/quotes/:id/tags', (req, res) => {
  addTag(req, res);
});

app.use('/api/v1', router);

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../templates', 'index.html'));
});

app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
});
