class NodeElement {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    addNewNodeElement(value) {
      const newNodeElement = new NodeElement(value);

      if (!this.head) {
        this.head = newNodeElement;
        this.tail = newNodeElement;
      } else {
        this.tail.next = newNodeElement;
        this.tail = newNodeElement;
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

        if (!this.head) {
          this.tail = null;
        }

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

        if (!currentElement.next) {
          this.tail = previousElement;
        }

        this.length--;
      } else {
        console.log('No value found');
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

    getFirstNodeElement() {
      if (this.head) {
        return this.head.value;
      } else {
        return null;
      }
    }

    getLastNodeElement() {
      if (this.tail) {
        return this.tail.value;
      } else {
        return null;
      }
    }

    showAllElements() {
      let currentElement = this.head;

      while (currentElement) {
        currentElement = currentElement.next;
      }
    }

    listLength() {
      return this.length;
    }

    clearList() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
}
