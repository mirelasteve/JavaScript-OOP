const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets(['']);
let print = this.print || console.log;
let myArray = ['duck', 'cat', 'flower'];
let n = 3;
let arr = [];
let index = 0;
let save = [];
const generateCombination = (n, arr, index, workArray, save) => {
    if (index === n) {
        save.push(arr.join(' '));
        return;
    }
    for (let i = 0; i < workArray.length; i += 1) {
        let x = workArray[i];
        arr[index] = x;
        generateCombination(n, arr, index + 1, workArray, save);
    }
    return save;
}
print(generateCombination(n, arr, index, myArray, save));
