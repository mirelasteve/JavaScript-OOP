let amount = +gets();
let packs = gets().split(' ').map(Number);
let days = 0;
const countPacks = (packs) => {
    let queue = [];
    let eaten = new Set();
    queue.push(packs[0]);
    for (let i = 1; i < packs.length; i += 1) {
        if ((packs[i - 1] > packs[i]) && (packs[i] < packs[i + 1]) || ((packs[i - 1] > packs[i])) && (typeof(packs[i + 1]) == 'undefined')) {
            queue.push(packs[i]);
            eaten.add(packs[i + 1]);
        }
        if (packs[i] > packs[i + 1] && packs[i] > packs[i - 1]) {
            eaten.add(packs[i]);
        }
    }
    if (eaten.has(undefined) && eaten.size > 1) {
        return queue;
    }
    if (!eaten.has(undefined) && eaten.size === 1) {
        return queue;
    }
    if (eaten.has(undefined) && eaten.size === 1) {
        return ('wrong');
    }
};

let j = '';
while (j !== 'wrong') {
    packs = countPacks(packs);
    j = packs;
    days += 1;
}
print(days - 1);
