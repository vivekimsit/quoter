"use strict";


module.exports = {
  tags: () => {
    const tagStore = {};
    return {
      get: (key) => tagStore[key],
      set: (key, value) => {
        tagStore[key] = tagStore[key] || [];
        tagStore[key].push(value);
      },
      all: () => {
        const keys = Object.keys(tagStore);
        const tags = [];
        for (const key of keys) {
          tags.concat(tagStore[key]);
        }
        return tags;
      }
    };
  },
  quotes: () => {
    const quoteStore = new WeakMap();
    return {
    
    };
  }
};
