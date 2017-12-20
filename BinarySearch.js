/*Matrix 20.12.2017*/
const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets(['5', '1 2 5 10 20 30']);
let print = this.print || console.log;
const searchFor = +gets();
const arr = gets().split(' ');
let start = 0;
let end = arr.length - 1;
let middle;
while (arr[start] > arr.length - 1) {
    middle = (arr[end] + arr[start]) / 2 | 0;
    if (arr[middle] < searchFor) {
        arr[start] = middle + 1;
    } else if (arr[middle] > searchFor) {
        arr[end] = middle - 1;
    } else {
        console.log(middle);
    }
}
//binary search with recursion
const recBinSearh = (arr, key, start, end) => {
    if (start > end) {
        return -1;
    }
    const middle = ((start + end) / 2) | 0; // sredniqt indeks
    if (arr[middle] > key) {
        return recBinSearh(arr, key, start, middle - 1);
    } else if (arr[middle] < key) {
        return recBinSearh(arr, key, middle + 1, end);
    } else {
        return middle;
    }
}
console.log(recBinSearh(arr, searchFor, 0, arr.length - 1));
