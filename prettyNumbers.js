let p = +gets();
let sequence = gets().split(' ').map(Number);
let max = Math.max(...sequence);

let nodes = [1];
nodes[1] = p;
let j = 1;
for (let i = 0; i < max; i += 1) {
    nodes[j] = nodes[i] * p;
    nodes[j + 1] = nodes[i] * p + 1;
    let check = Math.max(...nodes);
    if (check >= max) {
        break;
    }
    j += 2;
}
// console.log(nodes);
let sums = Array.from({ length: max * 2 }).fill(0);
for (let i = 0; i < nodes.length - 1; i += 1) {
    for (let j = i + 1; j < nodes.length - 1; j += 1) {

        let ind = nodes[i] + nodes[j];

        if (sums[ind] !== 0) {
            sums[ind] += 1;
        }
        if (sums[ind] === 0) {
            sums[ind] = 1;
        }
        // console.log(nodes[i] + ' + ' + nodes[j] + ' = ' + ind + ' sums[ind] =' + sums[ind]);

    }
}

let result = [];
for (let i = 0; i < sequence.length; i += 1) {
    let index = sequence[i];
    let ch = sums[index];
    if (ch > 1) {
        ch = 0;
    }
    result.push(ch);
}

print(result.join(' '));
quit(0);
