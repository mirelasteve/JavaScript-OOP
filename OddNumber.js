class HashTable {
    constructor(n) {
            this.table = {};
        }
    }
    put(data) {
       
        if (this.table[data]) {
            this.table[data] += 1;
        } else {
            this.table[data] = 1;
        }
    }
    getTable() {
        return this.table;
    }
    getOdd() {
        for (let numb in this.table) {
            if (this.table[numb] % 2 != 0) {
                return numb;
                break;
            }
        }
    }
}

const n = +gets();
const hTable = new HashTable(n);
for (let i = 0; i < n; i += 1) {
    const data = gets();
    hTable.put(data);
}
print(hTable.getOdd());
