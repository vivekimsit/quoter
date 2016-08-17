const express = require('express');
const app = express();
const router = express.Router();

import {QuoteDesc} from './models';

app.use(express.static(__dirname));
app.use(serve);

function serve(req, res, next) {
	if (req.accepts('html'))
		res.sendFile(__dirname + '/delivery/web/index.html');
	else next();
}

const PORT = 3000;

// Quote specific routes
router.get('/', function(req, res) {
	console.log('Getting random quote');
	let quotes = new QuoteDesc();
	res.send(quotes.get());
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
