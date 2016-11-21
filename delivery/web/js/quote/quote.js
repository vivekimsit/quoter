/* Model representing quote */

function Quote(opt_data) {
  var data = opt_data || {};

  this.title  = data['text']   || '';
  this.author = data['author'] || '';
  this.category = data['category'] || '';
};

Quote.prototype.toString = function() {
  return '[' + this.title + ':' + this.author + ']';
};

export {Quote}
