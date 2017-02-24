import { Quote, Quotes } from './models';


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
    })
    .then(function success(response) {
      return response ? response.data : [];
    })
    .then(function addQuotes(json) {
      let quotes = new Quotes();
      for (let q of json) {
        let quote = new Quote(q.id, q.text, q.author, q.category);
        q['tags'] = q['tags'] || [];
        q['tags'].forEach(tag => {
          quote.tag(tag);
        });
        quotes.add(quote);
      }
      return quotes;
    });
  }
};
