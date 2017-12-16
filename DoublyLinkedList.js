class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LinkedList {
    constructor() {

        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(...elements) {
        elements.forEach((p) => {
            const node = new Node(p);
            if (this.head === null) {
                this.head = node;
                this.tail = node;

                // this.tail = node;

            } else {
                this.tail.next = node;
                node.prev = this.tail;
                this.tail = node;
            }
        });
        this.length += elements.length;
        return this;

    }
    prepend(...elements) {
        elements.forEach((el) => {
            const node = new Node(el);

            if (this.head === null) {
                this.head = node;
                this.tail = this.head;

            } else {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            }
        });
        this.length += elements.length;
        return this;

    }
    removeAt(index) {
        this._validateIndex(index);

        if (index === 0) {
            const result = this.head.value;
            this.head = this.head.next;

            if (this._length === 1) {
                this._last = null;
            }

            this._length--;

            return result;
        } else {
            let nodeToRemoveAfter = this._nodeAtIndex(index - 1);
            const result = nodeToRemoveAfter.next.value;
            nodeToRemoveAfter.next = nodeToRemoveAfter.next.next;

            if (index === this._length - 1) {
                this._last = nodeToRemoveAfter;
            }

            this._length--;

            return result;
        }
    }
}
}

const list = new LinkedList;

list.append(1, 2, 3, 4, 5, 6, 7);
console.log(list);
console.log(list.prepend(8));
