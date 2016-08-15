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
		equal(isDefAndNotNull(quotes.randomQuote()), true);
	});

  test.skip('should get random quote by author', () => {
	});

  test.skip('should get random quote by category', () => {
	});
});
