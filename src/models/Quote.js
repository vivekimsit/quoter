"use strict";


export default class Quote {
  constructor(text, author, category) {
    this.text = text;
    this.author = author;
    this.category =  category;
  }

  text() {
    return this.text;
  }

  author() {
    return this.author;
  }

  category() {
    return this.category;
  }

  toString() {
    return `
      == Quote ==
      text: ${this.text}
      author: ${this.author}
      category: ${this.category}`;
  }
}
