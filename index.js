Array.prototype.myFilter = function(callback, thisArg) {
    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
        const currentElement = this[i];

        if (i in this && callback.call(thisArg, currentElement, i, this)) {
            resultArray.push(currentElement);
        }
    }

    return resultArray;
};
