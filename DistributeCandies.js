
/*
Given an integer array with even length, where different numbers in this array represent 
different kinds of candies. Each number means one candy of the corresponding kind. 
You need to distribute these candies equally in number
to brother and sister. Return the maximum number of kinds of candies the sister could gain. 
*/
const distributeCandies = (candies) => {

    let candiesSort = candies.sort((a, b) =>
        (a - b));
    let count = 1;
    for (let i = 1; i < candiesSort.length && count < candies.length / 2; i += 1) {
        if (candiesSort[i] > candiesSort[i - 1]) {
            count += 1;
        }
    }
    return count;

}
