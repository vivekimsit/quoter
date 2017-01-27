"use strict";

const fs = require('fs');
const Symbols = {
  quotes: Symbol('quotes data'),
  count: Symbol('quotes count')
};

// Random in rangs [min, max)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function filter(list, predicate) {
  return list.filter(predicate);
}

export default class QuoteDesc {
  constructor(file, cb) {
    this[Symbols.quotes] = [];
    this[Symbols.count] = 0;
    this.readQuotes(file, cb);
  }

  readQuotes(file, cb) {
    fs.readFile(file, 'utf-8', (err, res) => {
      if (err) cb(err);
      res = JSON.parse(res);
      this[Symbols.quotes] = res;
      this[Symbols.count] = res.length;
      cb(null, this);
    });
  }

  all() {
    return this[Symbols.quotes];
  }

  count() {
    return this[Symbols.count];
  }

  randomQuote() {
    const id = getRandomNumber(0, this.count());
    return this[Symbols.quotes][id];
  }

  randomQuoteByAuthor(author) {
    const quotes = filter(this[Symbols.quotes], (q) => {
      return q.author === author; 
    });
    const id = getRandomNumber(0, quotes.length - 1);
    return quotes[id];
  }

  randomQuoteByCategory(category) {
    const quotes = filter(this[Symbols.quotes], (q) => {
      return q.category === category; 
    });
    const id = getRandomNumber(0, quotes.length - 1);
    return quotes[id];
  }
}
