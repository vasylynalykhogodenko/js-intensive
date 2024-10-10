class Calculator {
    constructor(x, y) {
        if (!this.isValidNumber(x) || !this.isValidNumber(y)) {
            throw new Error('Invalid numbers provided');
        }

        this.x = x;
        this.y = y;

        this.logSum = this.logSum.bind(this);
        this.logMul = this.logMul.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logDiv = this.logDiv.bind(this);
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
};

// Testing
const c = new Calculator(1, 2);

const logSumfn = c.logSum;
const logMulfn = c.logMul;
const logSubfn = c.logSub;
const logDivfn = c.logDiv;

console.log(logSumfn());  // 3
console.log(logMulfn());  // 2
console.log(logSubfn());  // -1
console.log(logDivfn());  // 0.5
