require('style!./fonts/index.css');
require('style!./styles/index.css');

import {QuoteComponent}  from './component';
import {QuoteController} from './controller';
import {QuoteService} from './service';


const QuoteModule = angular
    .module('quote', [])
    .component('quoteCard',  QuoteComponent)
    .controller('QuoteCtrl', QuoteController)
    .service('quoteService', QuoteService);

export {QuoteModule};
