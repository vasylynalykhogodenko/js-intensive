class NodeElement {
    constructor(value, nextValue = null) {
        this.value = value;
        this.nextValue = nextValue;
    }
}

class Stack {
    constructor(maxSize = 10) {
        if (typeof maxSize !== 'number' || !Number.isFinite(maxSize) || maxSize <= 0) {
            throw new Error('Invalid size of stack!');
        }

        this.maxSize = maxSize;
        this.size = 0;
        this.top = null;
    }

    push(value) {
        if (this.size >= this.maxSize) {
            throw new Error('Stack is full size!');
        }

        const newNodeElement = new NodeElement(value, this.top);

        this.top = newNodeElement;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty!');
        }

        const value = this.top.value;

        this.top = this.top.nextValue;
        this.size--;

        return value;
    }

    peek() {
        return this.isEmpty() ? null : this.top.value;
    }

    isEmpty() {
        return this.size === 0;
    }

    toArray() {
        const result = [];
        let current = this.top;

        while (current) {
            result.push(current.value);
            current = current.nextValue;
        }

        return result;
    }

    static fromIterable(iterable) {
        if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
            throw new Error('Input value is not iterable!');
        }

        const stack = new Stack(iterable.length);

        for (const item of iterable) {
            stack.push(item);
        }

        return stack;
    }
}
