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
}

const list = new LinkedList;

list.append(1, 2, 3, 4, 5, 6, 7);
console.log(list);
console.log(list.prepend(8));