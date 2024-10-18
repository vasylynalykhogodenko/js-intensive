class NodeElement {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }

    addNewNodeElement(value) {
      const newNodeElement = new NodeElement(value);

      if (!this.head) {
        this.head = newNodeElement;
      } else {
        let currentElement = this.head;

        while (currentElement.next) {
          currentElement = currentElement.next;
        }

        currentElement.next = newNodeElement;
      }

      this.length++;
    }

    removeNodeElement(value) {
      if (!this.head) {
        return null;
      }

      if (this.head.value === value) {
        this.head = this.head.next;
        this.length--;
        return;
      }

      let currentElement = this.head;
      let previousElement = null;

      while (currentElement !== value && currentElement.value !== value) {
        previousElement = currentElement;
        currentElement = currentElement.next;
      }

      if (currentElement) {
        previousElement.next = currentElement.next;
        this.length--;
      }
    }

    findElement(value) {
      let currentElement = this.head;

      while (currentElement) {
        if (currentElement.value === value) {
          return true;
        }

        currentElement = currentElement.next;
      }

      return false;
    }

    convertToArray() {
      let currentElement = this.head;
      const result = [];

      while (currentElement) {
        result.push(currentElement.value);
        currentElement = currentElement.next;
      }

      return result;
    }

    listLength() {
      return this.length;
    }
}
