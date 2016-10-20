/* Component representing quote */

var app   = window.app || {};
app.quote = app.quote  || {};

app.quote.QuoteComponent = {
  templateUrl: './static/js/quote/quote.html',
  bindings: {
    quote: '<'
  }
};
