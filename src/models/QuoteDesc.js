"use strict";

export default class Quotes {
  constructor() {
    this.quotes = [];
  }

  all() {
    return this.quotes;
  }

  add(json) {
    this.quotes.push(new Quote(json.title, json.author, json.category));
  }

  quote(id) {
    // Find quote by number
  }

  count() {
    return this.quotes.length;
  }
}
