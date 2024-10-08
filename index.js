class Calculator {
    constructor(x, y) {
        if (!this.isValidNumber(x) || !this.isValidNumber(y)) {
            throw new Error('Invalid numbers provided');
        }

        this.x = x;
        this.y = y;
    };

    isValidNumber(num) {
        return typeof num === 'number' && isFinite(num);
    };

    setX(newX) {
        if (!this.isValidNumber(newX)) {
            throw new Error('Invalid number provided');
        }

        this.x = newX;
    };

    setY(newY) {
        if (!this.isValidNumber(newY)) {
            throw new Error('Invalid number provided');
        }

        this.y = newY;
    };

    logSum() {
        return this.x + this.y;
    };

    logMul() {
        return this.x * this.y;
    };

    logSub() {
        return this.x - this.y;
    };

    logDiv() {
        if (this.y === 0) {
            throw new Error('Cannot divide by zero');
        }

        return this.x / this.y;
    };

    getBoundMethods() {
        return {
            logSum: this.logSum.bind(this),
            logMul: this.logMul.bind(this),
            logSub: this.logSub.bind(this),
            logDiv: this.logDiv.bind(this),
        };
    };
};
