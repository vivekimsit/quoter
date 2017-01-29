/* Controller for quotes view. */

export default class QuoteController {

  constructor($location, quoteService) {
    this.location_ = $location;
    this.quoteService_ = quoteService;

    this.message = '';
    this.loading = true;
    this.quotes = [];
    this.quote = null;
    this.count = 0;
    this.page  = 0;
    this.load(this.page);
  }

  load(page) {
    this.quoteService_
        .all({page: page})
        .then(function success(quotes) {
          this.quotes = quotes;
          this.quote = this.quotes.next();
          this.count += 1;
        }.bind(this))
        .catch(function error(err) {
          this.message = 'Oops something wrong happened!';
        }.bind(this))
        .finally(function() {
          this.loading = false;
        }.bind(this));
  }

  next() {
    if (this.count === QuoteController.QUOTE_COUNT) {
      this.page += 1;
      this.load(this.page);
    } else {
      this.quote = this.quotes.next();
      this.count += 1;
    }
  }

  favorite() {
    window.alert('Thanks, the quote is added to the favorite queue.');
  }
};
QuoteController.QUOTE_COUNT = 5;
