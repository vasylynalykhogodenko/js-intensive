const myIterable = {
    from: 1,
    to: 4,

    [Symbol.iterator]: function* () {
      if (typeof this.from !== 'number' || typeof this.to !== 'number') {
        throw new Error(`Both 'from' and 'to' must be numbers.`);
      }

      if (this.to < this.from) {
        throw new Error(`'to' must be greater than or equal to 'from'`);
      }

      for (let i = this.from; i <= this.to; i++) {
        yield i;
      }
    }
};
