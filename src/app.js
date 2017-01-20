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

function getQuotes(res, query) {
	new QuoteDesc(DATA_PATH, (err, model) => {
		if (err) throw err;
		res.json(model.all());
	});
}

// Quote specific routes
app.route('/api/v1/quotes').get(function(req, res) {
  getQuotes(res);
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
