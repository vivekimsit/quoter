const fs = require('fs');
const Symbols = {
	quotes: Symbol('quotes data'),
	count: Symbol('quotes count')
};

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class QuoteDesc {
	constructor(file, cb) {
		this[Symbols.quotes] = [];
		this[Symbols.count] = 0;
		this.readQuotes(file, cb);
	}

	readQuotes(file, cb) {
		fs.readFile(file, 'utf-8', (err, res) => {
			if (err) {
				cb(err);
				throw err;
			};
			res = JSON.parse(res);
			this[Symbols.quotes] = res;
			this[Symbols.count] = res.length;
			//console.log(res);
			cb(null, res);
		});
	}

	count() {
		return this[Symbols.count];
	}

	randomQuote() {
		let idx = getRandomNumber(0, this.count());
		console.log('Fetching random quote', this.count());
		return this[Symbols.quotes][idx];
	}
}
