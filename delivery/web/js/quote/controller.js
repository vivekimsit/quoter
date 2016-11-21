/* Controller for quotes view. */
import {Quote} from './quote';

function QuoteController($http, $location) {
  this.http_ = $http;

  this.message = '';
  this.loading = true;
  this.quotes  = null;
  this.load();
};

QuoteController.prototype.load = function(author, category) {
  var params = {
    author: author || '',
    category: category || ''
  };
  this.http_({
    method: 'GET',
    url: '/api/v1/quotes',
    params: params,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(function success(response) {
    this.quote = new Quote(response.data);
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
