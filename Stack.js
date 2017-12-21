const gets = this.gets || getGets(['1 12 34 54 12 8 43 535 143 53 14 65 33 25 54545']);
let print = this.print || console.log;

class Stack {
    constructor(count, storage) {
        this.count = 0;
        this.storage = [];
    }
    push(...values) {
        values.forEach((x) => {
            this.storage[this.count] = x;
            this.count += 1;
        });
    }
    pop() {
        const val = this.storage[this.storage.length - 1];

        this.storage = this.storage.slice(0, this.storage.length - 1);

        return val;
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }

    isEmpty() {
        return this.count === 0;
    }
}

let stack = new Stack;
let arr = gets().split(' ');
stack.push(...arr);
print(stack.storage[4]);
print(stack.pop());
print(stack.peek());
print(stack.isEmpty());
