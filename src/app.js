const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

import {QuoteDesc} from './models';

app.use('/js', express.static(path.resolve(__dirname, 'js')));
app.use(
    '/template', express.static(path.resolve(__dirname, 'delivery/web/js')));
app.use(
    '/css', express.static(path.resolve(__dirname, 'delivery/web/css')));
app.use(
    '/img', express.static(path.resolve(__dirname, 'delivery/web/img')));
app.use(morgan('combined'));

const PORT = 3000;
const DATA_PATH = path.join(__dirname, './data', 'quotes.json');

function getRandomQuote(res, query) {
	new QuoteDesc(DATA_PATH, (err, model) => {
		if (err) throw err;
		let quote;
		if (query.author) {
			quote = model.randomQuoteByAuthor(query.author);
		}
		else if (query.category) {
			quote = model.randomQuoteByCategory(query.category);
		}
		else {
			quote = model.randomQuote();
		}
		res.json(quote);
	});
}

// Quote specific routes
app.route('/api/v1/quotes')
    .get(function(req, res) {
      getRandomQuote(res, req.query);
    });

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/delivery/web/index.html');
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
