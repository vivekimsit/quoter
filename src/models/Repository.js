"use strict";


export default {
  tags: () => {
    const tagStore = new WeakMap();
    return {
      get: (key) => tagStore.get(key),
      set: (key, values) => tagStore.set(key, values),
      all: () => {
        const keys = Object.keys(tagStore);
        const tags = [];
        for (const key of keys) {
          tags.concat(tagStore.get(key));
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
}
