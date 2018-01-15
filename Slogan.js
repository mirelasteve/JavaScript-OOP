let amountOfSugg = +gets();
for (let i = 0; i < amountOfSugg; i += 1) {
    let words = gets().split(' ');
    let slogan = gets();
    let newSlogan = slogan;
    let indexes = [];
    let index;
    for (let i = 0; i < words.length; i += 1) {
        let check = words[i];
        let otherSlogan = slogan;
        let lenWord = check.length;
        let count = 0;

        while (newSlogan.includes(check)) {
            if (count == 0) {
                newSlogan = newSlogan.replace(check, '');
                index = otherSlogan.indexOf(check);
                otherSlogan = otherSlogan.replace(check, '');
                indexes[index] = check;
                count += 1;
            } else {
                newSlogan = newSlogan.replace(check, '');
                index = otherSlogan.indexOf(check);
                otherSlogan = otherSlogan.replace(check, '');
                indexes[index + lenWord] = check;
                count += 1;
            }

        }

    }
    if (newSlogan.length == 0) {
        let result = '';
        for (let i = 0; i < indexes.length; i += 1) {
            if (indexes[i]) {
                result += indexes[i] + ' ';
            }

        }
        print(result.trim());
    } else {
        print('NOT VALID');
    }
}
quit(0);
