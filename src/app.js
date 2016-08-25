const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

import {QuoteDesc} from './models';

app.use('/static', express.static(path.join(__dirname, './delivery/web')));
app.use(serve);
app.use(morgan('combined'));

function serve(req, res, next) {
	if (req.accepts('html'))
		res.sendFile(__dirname + '/delivery/web/index.html');
	else next();
}

const PORT = 3000;
const DATA_PATH = path.join(__dirname, './data', 'quotes.json');

function getRandomQuote(res, query) {
	new QuoteDesc(DATA_PATH, (err, model) => {
		if (err) throw err;
		let quotes;
		if (query.author) {
			quotes = model.randomQuoteByAuthor(query.author);
		}
		else if (query.category) {
			quotes = model.randomQuoteByCategory(query.category);
		}
		else {
			quotes = model.randomQuote();
		}
		res.json(quotes);
	});
}

// Quote specific routes
app.route('/api/v1/quotes')
	.get(function(req, res) {
		getRandomQuote(res, req.query);
	});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
