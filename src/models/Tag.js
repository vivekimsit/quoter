"use strict";


export default class Tag {
  constructor(name) {
    this.Id = null;
    this.name = name;
  }

  name() {
    return this.name;
  }

  toString() {
    return `
      == Tag ==
      name: ${this.name}`;
  }
}
