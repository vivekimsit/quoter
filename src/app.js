const path = require('path');
const express = require('express');
const app = express();

import {QuoteDesc} from './models';

app.use(express.static(__dirname));
app.use(serve);

function serve(req, res, next) {
	if (req.accepts('html'))
		res.sendFile(__dirname + '/delivery/web/index.html');
	else next();
}

const PORT = 3000;
const DATA_PATH = path.join(__dirname, './data', 'quotes.json');

function getRandomQuote(res) {
	let quotes = new QuoteDesc(DATA_PATH, (err, done) => {
		if (done) {
			quotes.randomQuote((err, data) => {
				res.send(data);
			});
		}
	});
}

// Quote specific routes
app.route('/api/v1')
	.get(function(req, res) {
		getRandomQuote(res);
	});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
