const depend = +gets();
class Graph {
    constructor() {
        this.adjList = [];
        this.dependencies = [];
        this.result = new Set();
        this.used = new Set();
    }
    addEdge(x, y) {
        if (this.adjList[x]) {
            this.adjList[x].push(y);
        } else {
            this.adjList[x] = [];
            this.adjList[x].push(y);
        }
    }

    dfs(start) {
        this.result.add(start);
        if (typeof(this.adjList[start]) == 'undefined') {
            return this.result;
        }
        for (let i = 0; i < this.adjList[start].length; i += 1) {
            if (this.used.has(this.adjList[start][i])) {
                continue;
            }
            this.result.add(start);
            this.used.add(this.adjList[start][i]);
            this.result.add(this.adjList[start][i]);
            this.dfs(this.adjList[start][i]);
        }
        return this.result;
    }
    nulls() {
        this.result = new Set();
        this.used = new Set();
    }
}
const graph = new Graph();
for (let i = 1; i <= depend; i += 1) {
    let datas = gets().split(' ').map(Number);
    graph.addEdge(datas[0], datas[1]);
}
const d = +gets();
for (let i = 1; i <= d; i += 1) {
    let start = +gets();
    let result = [...graph.dfs(start)]
        .sort((x, y) => x - y);
    graph.nulls();
    print(...result);
}
