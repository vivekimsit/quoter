function AppCtrl($http, $timeout, $location) {
  this.http_ = $http;
  this.location_ = $location;

  this.message = 'Baking your awesome quotes';
  this.quote = null;

  this.readQuote();
};

AppCtrl.prototype.next = function() {
  this.readQuote();
};

AppCtrl.prototype.readQuote = function() {
  var query = this.location_.search();
  this.quote = null;
  this.http_({
    method: 'GET',
    url: '/api/v1/quotes',
    params: {
      author: !!query ? query.author : '',
      category: !!query ? query.category : ''
    },
    headers: {
      'Accept': 'application/json'
    }
  }).then(function successCallback(response) {
    this.quote = response.data;
    //$timeout(readQuote, 5000 /* request next quote after 5 secs */);
  }.bind(this), function errorCallback(response) {
    console.log(response);
  });
};
