const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([3, 3]);
let print = this.print || console.log;
const row = +gets();
const col = +gets();
let answer = [];
const printVariationWithRep = (n, k, index, permutation, arr, asnwer) => {
    if (index === k) {
        answer.push([...permutation]);
        // print(permutation);
        return;
    }
    for (let i = 0; i < n; i++) {
        permutation[index] = arr[i];
        printVariationWithRep(n, k, index + 1, permutation, arr, answer);
    }
}
let comb = ['w', 'b'];
let perm = [];
printVariationWithRep(2, row * col, 0, perm, comb);
// print(answer);
let counter = 0;
let firstValid = [];
for (let perm of answer) {
    let valid = true;
    for (let i = 0; i <= perm.length - col; i += 1) {
        if ((perm[i] == 'b' && perm[i + col] == 'b')) {
            valid = false;
            break;
        }
    }
    if (valid) {
        firstValid.push(perm);
    }

}

for (let perm of firstValid) {
    let valid = true;
    let d = col;
    for (let i = 0; i < perm.length; i += 1) {
        if (i == d - 1) {
            d += col;
            continue;
        }
        if (perm[i] == 'b' && perm[i + 1] == 'b') {
            valid = false;
            break;
        }
    }
    if (valid) {
        counter += 1;
    }
}
print(counter);
