"use strict";

const fs = require('fs');
const Symbols = {
  quotes: Symbol('quotes data'),
  count: Symbol('quotes count')
};

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
}
