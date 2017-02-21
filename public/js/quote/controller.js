/* Controller for quotes view. */
const QUOTE_COUNT = 5;

export default class QuoteController {

  constructor($location, $mdToast, quoteService) {
    this.location_ = $location;
    this.toast_ = $mdToast;
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
    if (this.count === QUOTE_COUNT) {
      this.page += 1;
      this.load(this.page);
    } else {
      this.quote = this.quotes.next();
      this.count += 1;
    }
  }

  favorite() {
    this.showToast_('Thanks, the quote is added to the favorite queue.');
  }

  showToast_(message) {
    this.toast_.show(this.toast_.simple().textContent(message));
  }
};
