"use strict";

import Quote from './Quote';

export default class Quotes {
  constructor() {
    this.quotes = [];
  }

  all() {
    return this.quotes;
  }

  add(json) {
    this.quotes.push(new Quote(json.text, json.author, json.category));
  }

  count() {
    return this.quotes.length;
  }
}
