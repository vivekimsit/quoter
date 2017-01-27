var path = require('path');

var CLIENT_JS = path.resolve(__dirname, 'public', 'js');
var BUILD_JS  = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(CLIENT_JS, 'main.js'),
  output: {
    path: BUILD_JS,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /src/],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url?limit=10000000' }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
