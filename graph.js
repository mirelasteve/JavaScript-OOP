class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        for (var i = 0; i < this.vertices; i++) {
            this.adj[i] = [];
            this.adj[i].push('');
        }
        this.marked = [];
        for (let i = 0; i < this.vertices; i++) {
            this.marked[i] = false;
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    showGraph() {
        let answer = '';
        let janswer = '';
        for (var i = 0; i < this.vertices; i++) {
            answer = i + ' -> ';
            janswer = '';
            for (var j = 0; j < this.vertices; j++) {
                if (typeof(this.adj[i][j]) !== 'undefined')
                    janswer += this.adj[i][j] + ' ';
            }

            console.log(answer + janswer);

        }
    }
    // dfs needs improvement
    dfs(n) {
        this.marked[n] = true;
        if (typeof(this.adj[n]) !== 'undefined') {
            console.log('Visited vertex: ' + n);

        }
        let order = this.adj[n];
        for (let ind of order) {
            if (ind !== '') {
                this.dfs(ind);
            }
            //   if (!this.marked[this.adj[n]) {
            //           this.dfs(ind);
            //       }
        }
    }
}

const graph = new Graph(5);
// console.log(graph);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
console.log(graph);
graph.showGraph();
graph.dfs(0);
