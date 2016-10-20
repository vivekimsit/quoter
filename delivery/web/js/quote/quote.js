/* Model representing quote */

var app   = window.app || {};
app.quote = app.quote  || {};

app.quote.Quote = function Quote(opt_data) {
  var data = opt_data || {};

  this.title  = data['text']   || '';
  this.author = data['author'] || '';
  this.category = data['category'] || '';
};
var Quote = app.quote.Quote;

Quote.prototype.toString = function() {
  return '[' + this.title + ':' + this.author + ']';
};
