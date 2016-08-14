const data = Symbol('quotes');

export default class QuoteDesc {
	constructor(quoteRepository) {
		this[data] = [];
		this[N] = 0;
		this.quoteRepository = quoteRepository;
		this.readQuotes();
	}

	readQuotes() {
		this.quoteRepository.readAll()
				.then( (res) => {
					this[data] = res.data;
				})
				.catch( (err) => {
					console.log('Error reading quotes');
				});
	}

	count() {
		return this[N];
	}

	getRandomQuote() {
		let idx = getRandomNumber(0, this[N]);
		return this[data][idx];
	}

	static getRandomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}
}
