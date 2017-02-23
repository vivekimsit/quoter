"use strict";

import Quote from './Quote';

export default class Quotes {
  constructor() {
    this.quotes = [];
  }

  all() {
    let res = [];
    for (let quote of this.quotes) {
      const tags = quote.tags();
      res.push({
        text: quote.text,
        author: quote.author,
        category: quote.category,
        tags: tags
      });
    }
    return res;
  }

  add(quote) {
    this.quotes.push(quote);
  }

  count() {
    return this.quotes.length;
  }
}
