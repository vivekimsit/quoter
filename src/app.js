const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

import {QuoteDesc} from './models';

app.use('/js', express.static(path.resolve(__dirname, 'js')));
app.use(express.static(path.resolve(__dirname, 'delivery', 'web')));
app.use(morgan('combined'));

const PORT = 3000;
const DATA_PATH = path.resolve(__dirname, 'data', 'quotes.json');
const PAGE_SIZE = 5;

function getQuotes(req, res, query) {
	new QuoteDesc(DATA_PATH, (err, model) => {
		if (err) throw err;
    let quotes = model.all();
    let page = req.query.page || 0;
    let skip = page * PAGE_SIZE;
		res.json(quotes.splice(skip, PAGE_SIZE));
	});
}

// Quote specific routes
app.route('/api/v1/quotes').get(function(req, res) {
  getQuotes(req, res);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/delivery/web/index.html');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
  res.sendFile(__dirname + '/delivery/web/404.html');
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
