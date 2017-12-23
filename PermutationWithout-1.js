let myArray = ['duck', 'cat', 'flower'];
let n = 3;
let arr = [];
let index = 0;
let save = [];
let used = [];
const generatePermutation = (n, arr, index, workArray, save, used) => {
    if (index === n) {
        save.push(arr.join(' '));
        return;
    }
    for (let i = 0; i < workArray.length; i += 1) {
        if (used[i]) {
            continue;
        }
        used[i] = true;
        let x = workArray[i];
        arr[index] = x;
        generatePermutation(n, arr, index + 1, workArray, save, used);
        used[i] = false;
    }
    return (save);
}
print(generatePermutation(n, arr, index, myArray, save, used));
