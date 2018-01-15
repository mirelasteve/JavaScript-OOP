const [row, col] = gets().split(' ').map(Number);
let player1 = { ships: 0 };
let player2 = { ships: 0 };

const matrixPlayerOne = Array.from({ length: row });
for (let i = 0; i < row; i += 1) {
    let coords = gets().split(' ').map(Number);
    let countShips = coords;
    matrixPlayerOne[i] = coords;
    let ships = countShips.filter((x) => x == 1);
    player1.ships += ships.length;
}
const matrixPlayerTwo = Array.from({ length: row });
for (let i = row - 1; i >= 0; i -= 1) {
    let coords = gets().split(' ').map(Number);
    let countShips = coords;
    let ships = countShips.filter((x) => x == 1);
    player2.ships += ships.length;
    matrixPlayerTwo[i] = coords.reverse();
}
let command = gets().split(' ');
let comm = command[0];
let counterPlayers = 1;
let wasHereOne = new Set();
let wasHereTwo = new Set();
while (comm !== 'END') {

    if (counterPlayers % 2 !== 0) {
        let fightRow = +command[1];
        let fightCol = +command[2];
        let wasHere = fightRow + ' ' + fightCol;
        if (wasHereOne.has(wasHere)) {
            print('You already shot there!');
        } else {
            wasHereOne.add(wasHere);
            let isShip = matrixPlayerTwo[fightRow][fightCol];
            if (isShip == 0) {
                print('Missed');
            } else {
                player1.ships -= 1;
                matrixPlayerTwo[fightRow][fightCol] = 0;
                print('Booom');
            }
        }
    }
    if (counterPlayers % 2 == 0) {
        let fightRow = +command[1];
        let fightCol = +command[2];
        let wasHere = fightRow + ' ' + fightCol;
        if (wasHereTwo.has(wasHere)) {
            print('You already shot there!');
        } else {
            wasHereTwo.add(wasHere);
            let isShip = matrixPlayerOne[fightRow][fightCol];
            if (isShip == 0) {
                print('Missed');

            } else {
                player2.ships -= 1;
                matrixPlayerOne[fightRow][fightCol] = 0;
                print('Booom');
            }
        }
    }
    command = gets().split(' ');
    comm = command[0];
    counterPlayers += 1;
}
print(player1.ships + ':' +
    player2.ships);

quit(0);
