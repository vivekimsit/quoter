/* Controller for quotes view. */


function QuoteController($location, quoteService) {
  this.location_ = $location;
  this.quoteService_ = quoteService;

  this.message = '';
  this.loading = true;
  this.quotes  = null;
  this.load();
};

QuoteController.prototype.load = function(author, category) {
  this.quoteService_
      .get({author: author, category: category})
      .then(function success(quote) {
        this.quote = quote;
      }.bind(this))
      .catch(function error(err) {
        this.message = 'Oops something wrong happened!';
      }.bind(this))
      .then(function() {
        this.loading = false;
      }.bind(this));
};

QuoteController.prototype.next = function() {
  this.load();
};

QuoteController.prototype.favorite = function() {
  window.alert('Thanks, the quote is added to the favorite queue.');
};

export {QuoteController};
