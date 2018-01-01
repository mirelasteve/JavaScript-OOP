class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show() {
        return this.data;
    }
}
class Bst {
    constructor() {
        this.root = null;
    }

    getMin() {
        let current = this.root;
        while ((current.left !== null)) {
            current = current.left;
        }
        return current.data;
    }
    getMax() {
        let current = this.root;
        while ((current.right !== null)) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while (current.data != data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current == null) {
                return null;
            }
        }
        return current;
    }

    removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            if (node.left == null && node.right == null) {
                return null;
            }
            if (node.left == null) {
                return node.right;
            }

            if (node.right == null) {
                return node.left;
            }
            var tempNode = this.getMin(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
    remove(data) {
        let root = this.removeNode(this.root, data);
        return root;
    }
    insert(data) {
        let n = new Node(data, null, null);
        if (this.root == null) {
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
}
const inOrder = (node) => {
    if ((node !== null)) {
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}
const preOrder = (node) => {
    if ((node !== null)) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}
const postOrder = (node) => {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}
const binary = new Bst();
console.log(binary);
binary.insert(23);
binary.insert(45);
binary.insert(16);
binary.insert(37);
binary.insert(3);
binary.insert(99);
binary.insert(22);
// console.log(binary);
console.log(binary.remove(99));
