/* Model representing quote collection */
import {Quote} from './quote';

function Quotes() {
  this.quotes = [];
  this.size = 0;
  this.currentIndex = -1;
}

var QuotesProto = Quotes.prototype;

QuotesProto.add = function add(data) {
  var newQuote = new Quote(data);
  this.quotes.push(newQuote);
  this.size++;
  return newQuote;
};

QuotesProto.all = function all() {
  return this.quotes;
};

QuotesProto.isEmpty = function isEmpty() {
  return this.size === 0;
};

QuotesProto.next = function next() {
  this.currentIndex = (this.currentIndex + 1) % this.size;
  return this.quotes[this.currentIndex];
};

export {Quotes};
