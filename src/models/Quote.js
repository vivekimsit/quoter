"use strict";

const tags = require('./Repository').tags();

let nextId = 0;

export default class Quote {
  constructor(text, author, category) {
    this.id = nextId++;
    this.text = text;
    this.author = author;
    this.category = category;
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

  tags() {
    return tags.get(this.id);
  }

  tag(tag) {
    tags.set(this.id, tag);
  }

  toString() {
    return `
      == Quote ==
      text: ${this.text}
      author: ${this.author}`;
  }
}
