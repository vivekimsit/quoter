function HomeController($http, $location) {
  this.http_ = $http;
  this.location_ = $location;

  this.loading = true;
};

export {HomeController};
