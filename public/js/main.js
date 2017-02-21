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
            template: require('./quote/index.html'),
            controller: 'QuoteCtrl',
            controllerAs: 'vm'
          })
          .otherwise({
            redirectTo: './templates/404.html',
          });
      $locationProvider.html5Mode(true);
    });

angular.bootstrap(document.getElementsByTagName("body")[0], [APP_NAME]);
