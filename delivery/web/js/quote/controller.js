/* Controller for quotes view. */


function QuoteController($location, quoteService) {
  this.location_ = $location;
  this.quoteService_ = quoteService;

  this.message = '';
  this.loading = true;
  this.quotes = [];
  this.quote = null;
  this.load();
};

QuoteController.prototype.load = function(author, category) {
  this.quoteService_
      .all({limit: 10})
      .then(function success(quotes) {
        this.quotes = quotes;
        this.quote = this.quotes.next();
      }.bind(this))
      .catch(function error(err) {
        this.message = 'Oops something wrong happened!';
      }.bind(this))
      .finally(function() {
        this.loading = false;
      }.bind(this));
};

QuoteController.prototype.next = function() {
  this.quote = this.quotes.next();
  //this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
};

QuoteController.prototype.favorite = function() {
  window.alert('Thanks, the quote is added to the favorite queue.');
};

export {QuoteController};
