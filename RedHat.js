let dest = +gets();
class Graph {
    constructor(dest) {
        this.neighb = [];
        this.used = [];
        this.sum = 0;
        this.sums = [];
        for (let i = 0; i <= dest; i += 1) {
            this.neighb[i] = [];
            this.used[i] = 0;
            this.neighb[i].push('');
        }
        this.money = [0];
    }
    addMoney(money) {
        this.money = this.money.concat(money);
    }
    addDest(x, y) {
        this.neighb[x].push(y);
        this.neighb[y].push(x);
    }
    search(n) {
        this.used = this.used.fill(0);
        this.sum = 0;
        return this.dfs(n);
    }
    dfs(n) {
        this.used[n] = 1;
        this.sum += this.money[n];
        this.sums.push(this.sum);
        for (let i = 1; i < this.neighb[n].length; i += 1) {
            if (this.used[this.neighb[n][i]]) {
                continue;
            }
            this.dfs(this.neighb[n][i]);
            this.used[this.neighb[n][i]] = 0;
            this.sum -= this.money[this.neighb[n][i]];

        }
        return this.sums;
    }
}
const graph = new Graph(dest);
graph.addMoney(gets().split(' ').map(Number));
for (let i = 0; i < dest - 1; i += 1) {
    const [x, y] = gets().split(' ').map(Number);

    graph.addDest(x, y);
}
let result;
for (let i = 1; i <= dest; i += 1) {
    result = graph.search(i);
}
print(Math.max(...result));
