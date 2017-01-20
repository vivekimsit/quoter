import {Quotes} from './quotes';


function QuoteService($http) {
  this.http_ = $http;
};

QuoteService.prototype.all = function(params) {
  return this.http_({
    method: 'GET',
    url: '/api/v1/quotes',
    params: params,
    headers: {
      'Accept': 'application/json'
    }
  }).then(function success(response) {
    let quotes = new Quotes();
    for (let quote of response.data) {
      quotes.add(quote);
    }
    return quotes;
  });
};

export {QuoteService};
