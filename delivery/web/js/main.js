var app  = window.app || {};
app.home = app.home   || {};

app.home.Controller = function HomeCtrl($http, $location) {
  this.http_ = $http;
  this.location_ = $location;

  this.loading = true;
};
var Controller = app.home.Controller;

angular.module('App', [
      'ngMaterial',
      'ngAnimate',
      'quote'
    ])
    .config(function ($locationProvider) {
      $locationProvider.html5Mode(true);
    })
    .controller('HomeCtrl', app.home.Controller)
