/* Model representing quote */

export default class Quote {

  constructor(title, author, category) {
    this.title  = title;
    this.author = author;
    this.category = category;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  toString() {
    return `${this.title}: ${this.author}`;
  }
};
