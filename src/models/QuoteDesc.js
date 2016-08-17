const fs = require('fs');
const Symbols = {
	quotes: Symbol('quotes data'),
	count: Symbol('quotes count')
};

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function filter(list, predicate) {
	return list.filter(predicate);
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
			cb && cb(null, true);
		});
	}

	count() {
		return this[Symbols.count];
	}

	randomQuote(cb) {
		const id = getRandomNumber(0, this.count());
		cb(null, this[Symbols.quotes][id]);
	}

	randomQuoteByAuthor(author) {
		const quotes = filter(this[Symbols.quotes], (q) => {
			return q.author === author;	
		});
		const id = getRandomNumber(0, quotes.length - 1);
		return quotes[id];
	}

	randomQuoteByCategory(category) {
		const quotes = filter(this[Symbols.quotes], (q) => {
			return q.category === category;	
		});
		const id = getRandomNumber(0, quotes.length - 1);
		return quotes[id];
	}
}
