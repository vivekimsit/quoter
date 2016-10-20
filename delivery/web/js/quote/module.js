var app   = window.app || {};
app.quote = app.quote  || {};

app.quote.module = angular
    .module('quote', [])
    .component('quoteCard', app.quote.QuoteComponent)
    .controller('QuoteCtrl', app.quote.QuoteController);
