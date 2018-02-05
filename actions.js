const [dep, orders] = gets().split(' ').map(Number);
class Graph {
    constructor(n) {
        this.adjMatrix = Array.from({ length: n });
        this.countAfter = [];
        this.freeChildren = [];
        this.visited = [];
        this.setQueue = new Set();

        for (let i = 0; i < n; i += 1) {
            this.adjMatrix[i] = [];
            this.countAfter[i] = 0;
            this.freeChildren[i] = [];
            this.visited[i] = false;
        }
    }
    addEdge(x, y) {
        this.adjMatrix[x].push(y);
        this.countAfter[y] += 1;
        this.freeChildren[x].push(y);
    }
    dfs() {
        for (let i = 0; i < this.adjMatrix.length; i += 1) {
            if (this.countAfter[i] === 0 && this.visited[i] == false) {
                this.setQueue.add(i);
                this.visited[i] = true;

                for (let child of this.freeChildren[i]) {
                    this.countAfter[child] -= 1;
                }


            } else {
                continue;
            }
            i = -1;
        }
        return this.setQueue;
    }

}


const graph = new Graph(dep);
for (let i = 0; i < orders; i += 1) {
    const [x, y] = gets().split(' ').map(Number);
    graph.addEdge(x, y);
}
// graph.dfs();
// print(graph);
let result = graph.dfs();
print([...result].join('\n'));
