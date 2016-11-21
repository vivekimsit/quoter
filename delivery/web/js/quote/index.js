import {QuoteComponent}  from './component';
import {QuoteController} from './controller';

const QuoteModule = angular
    .module('quote', [])
    .component('quoteCard',  QuoteComponent)
    .controller('QuoteCtrl', QuoteController);

export {QuoteModule};
