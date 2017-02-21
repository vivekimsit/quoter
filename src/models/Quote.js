"use strict";

const repository = require('./Repository');

export default class Quote {
  constructor(text, author) {
    this.id = null;
    this.text = text;
    this.author = author;
  }

  text() {
    return this.text;
  }

  author() {
    return this.author;
  }

  tags() {
    repository.tags().get(this.id);
  }

  tag(tag) {
    repository.tags().set(this.id, tag);
  }

  toString() {
    return `
      == Quote ==
      text: ${this.text}
      author: ${this.author}`;
  }
}
