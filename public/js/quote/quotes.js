/* Model representing quote collection */

import Quote from './quote';

export default class Quotes {

  constructor() {
    this.quotes = [];
    this.size = 0;
    this.currentIndex = -1;
  }

  add(title, author, category) {
    let newQuote = new Quote(title, author, category);
    this.quotes.push(newQuote);
    this.size++;
    return newQuote;
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
