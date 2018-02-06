const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets(['10',
    '(5 <- 11)',
    '(1 <- 8)',
    '(11 <- 3)',
    '(8 <- 7)',
    '(1 <- 5)',
    '(11 <- 2)',
    '(8 <- 6)',
    '(2 <- 15)',
    '(8 <- 4)'
]);
let print = this.print || console.log;
let edges = +gets();
class Graph {
    constructor() {
        this.neighbours = [];
        this.leaves = new Set(this.leaves);
        this.sum = 0;
        this.sums = [];
        this.used = [];

    }
    add(x, y) {
        if (this.neighbours[x]) {
            this.neighbours[x].push(+y);

        } else {
            this.neighbours[x] = [];
            this.neighbours[x].push(+y);
        }
        if (this.neighbours[y]) {
            this.neighbours[y].push(+x);
        } else {
            this.neighbours[y] = [];
            this.neighbours[y].push(+x);
        }
        if (this.used[x]) {
            this.used[x] = 0;
        } else {
            this.used[x] = [];
            this.used[x] = 0;
        }
        if (this.used[y]) {
            this.used[y] = 0;
        } else {
            this.used[y] = [];
            this.used[y] = 0;
        }
    }
    giveLeaves() {
        for (let i = 0; i < this.neighbours.length; i += 1) {
            if (this.neighbours[i]) {
                if (this.neighbours[i].length === 1) {
                    this.leaves.add(i);
                }
            }
        }
        return this.leaves;
    }
    search(n) {
        this.sum = 0;
        for (let i = 0; i < this.used.length; i += 1) {
            this.used[i] = 0;
        }
        return this.searchLeaves(n);

    }
    searchLeaves(n) {
        if (this.leaves.has(n) && !this.used[n]) {
            this.sum += n;
        }
        if (this.leaves.has(n) && this.used[n]) {

            this.sums.push(this.sum);
            return;
        }
        for (let i = 0; i < this.neighbours[n].length; i += 1) {

            this.used[n] = 1;
            if (!this.used[this.neighbours[n][i]]) {
                this.sum += +this.neighbours[n][i];
                this.used[this.neighbours[n][i]] = 1;
                this.searchLeaves(this.neighbours[n][i]);
                this.used[this.neighbours[n][i]] = 0;
                this.sum = this.sum - this.neighbours[n][i];
            } else {
                continue;
            }
        }
        return this.sums;
    }
}
const graph = new Graph(edges);
for (let i = 0; i < edges - 1; i += 1) {
    const [x, y] = gets().match(/\d+/g);
    graph.add(x, y);
}
let leaves = new Set(graph.giveLeaves());
// print(graph);
let result;
for (let leaf of leaves) {
    result = graph.search(leaf);
}
print(Math.max(...result));
