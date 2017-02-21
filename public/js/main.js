import QuoteModule from './quote';
import {HomeModule} from './home';

const APP_NAME = 'QuoteApp';

export default angular.module(
    APP_NAME,
    [
      'ngMaterial',
      'ngAnimate',
      'ngRoute',
      HomeModule.name,
      QuoteModule.name
    ])
    .config(function ($locationProvider, $routeProvider) {
      $routeProvider
          .when('/', {
            template: require('./quote/template.html'),
            controller: 'QuoteCtrl',
            controllerAs: 'vm'
          })
          .when('/404', {
            template: require('./404/template.html'),
          })
          .otherwise({
            redirectTo: '/404'
          });
      $locationProvider.html5Mode(true);
    });

angular.bootstrap(document.getElementsByTagName("body")[0], [APP_NAME]);
