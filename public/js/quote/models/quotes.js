/* Model representing quote collection */

import Quote from './quote';

export default class Quotes {

  constructor() {
    this.quotes = [];
    this.size = 0;
    this.currentIndex = -1;
  }

  add(quote) {
    this.quotes.push(quote);
    this.size++;
  }

  all() {
    return this.quotes;
  }

  isEmpty() {
    return this.size === 0;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.size;
    return this.quotes[this.currentIndex];
  }
};
