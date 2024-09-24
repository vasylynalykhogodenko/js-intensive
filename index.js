Array.prototype.myFilter = function(callback, thisArg) {
    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            const currentElement = this[i];

            if (callback.call(thisArg, currentElement, i, this)) {
                resultArray.push(currentElement);
            }
        }
    }

    return resultArray;
};
