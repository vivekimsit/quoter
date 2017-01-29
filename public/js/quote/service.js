import Quotes from './quotes';


export default class QuoteService {
  constructor($http) {
    this.http_ = $http;
  }

  all(params) {
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
        quotes.add(quote.text, quote.author, quote.category);
      }
      return quotes;
    });
  }
};
