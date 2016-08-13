const data = Symbol('quote data');

export default class Quote {
	constructor(title, author, category) {
		this[data] = {
			title: title,
			author: author,
			category: category
		};
	}

	get title() {
		return this[data].title;
	}

	get author() {
		return this[data].author;
	}

	get category() {
		return this[data].category;
	}

	toString() {
		return `
			== Quote ==
			title: ${this.title}
			author: ${this.author}
			category: ${this.category}`;
	}
}
