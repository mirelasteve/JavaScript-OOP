/**
 * @param {string[]} words
 * @return {string[]}
 Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard
 */
const findWords = (words) => {
    let accessWords = [];
    const first = 'qwertyuiop'.split('');
    const second = 'asdfghjkl'.split('');
    const third = 'zxcvbnm'.split('');
    let capacity = 25;
    let list = words;
    const hashing = (letter) => {
        let hash = letter.charCodeAt(0);
        return Math.abs(hash) % capacity;
    }

    const create = (values) => {
        let arr = [];
        values.forEach((x) => {
            let index = hashing(x);
            arr[index] = x;
        });
        return arr;
    }
    let firstLine = create(first);
    console.log(firstLine);
    let secondLine = create(second);
    let thirdLine = create(third);
    const areOnSameLine = (letter) => {
        let newcheck = 0;
        let check = 0;
        let judge = true;
        letter.toString().toLowerCase().split('').forEach((letter) => {

            let ind = hashing(letter);

            if (firstLine[ind] == letter) {
                check = 1;
            }
            if (secondLine[ind] == letter) {
                check = 2;

            }
            if (thirdLine[ind] == letter) {
                check = 3;
            }

            if (newcheck) {
                if (newcheck != check) {
                    judge = false;

                }
            }
            newcheck = check


        });

        if (judge) {
            return letter;
        }
    }
    const find = (list) => {

        list.forEach((word) => {
            let workWord = word;
            accessWords.push(areOnSameLine(workWord));
        });
        return accessWords.filter((x) => typeof(x) !== 'undefined');
    }
    return find(words);
}
