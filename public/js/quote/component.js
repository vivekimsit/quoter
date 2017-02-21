/* Component representing quote */

export default {
  template: require('./quote.html'),
  bindings: {
    quote: '<',
    onFavorite: '&',
    onNext: '&'
  }
};
