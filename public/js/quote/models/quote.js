/* Model representing quote */

export default class Quote {

  constructor(id, title, author, category) {
    this.id = id; 
    this.title  = title;
    this.author = author;
    this.category = category;
    this.tags = [];
  }

  tag(tag) {
    this.tags.push(tag);
  }

  tags() {
    return [...this.tags];
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
