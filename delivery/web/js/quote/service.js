import {Quote} from './quote';


function QuoteService($http) {
  this.http_ = $http;
};

QuoteService.prototype.get = function(params) {
  return this.http_({
    method: 'GET',
    url: '/api/v1/quotes',
    params: params,
    headers: {
      'Accept': 'application/json'
    }
  }).then(function handleResponse(response) {
    return new Quote(response.data);
  });
};

export {QuoteService};
