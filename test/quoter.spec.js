const path = require('path');
import {strictEqual as equal} from 'assert';
import {QuoteDesc} from '../models';

function isDefAndNotNull(val) {
	return val != null;
}

suite('Quoter', () => {
	let quotes;
	beforeEach(function(done) {
		let filePath = path.join(__dirname, '../data', 'quotes.json');
		quotes = new QuoteDesc(filePath, done);
	});

  test('should get random quote', () => {
		let q = quotes.randomQuote();
		equal(isDefAndNotNull(q), true);
	});

  test('should get random quote by author', () => {
		let q = quotes.randomQuoteByAuthor('Mahatma Gandhi');
		equal(q.author, 'Mahatma Gandhi');
	});

  test('should get random quote by category', () => {
		let q = quotes.randomQuoteByCategory('inspiration');
		equal(q.category, 'inspiration');
	});
});
