// https://www.codewars.com/kata/5270d0d18625160ada0000e4

function score(dice) {
    let score = 0;
    dice.sort((a, b) => (a - b < 0) ? -1 : 1);
    let ones = dice.filter(x => x === 1).length;
    let twos = dice.filter(x => x === 2).length;
    let threes = dice.filter(x => x === 3).length;
    let fours = dice.filter(x => x === 4).length;
    let fives = dice.filter(x => x === 5).length;
    let sixes = dice.filter(x => x === 6).length;

    (ones >= 3) ? score += 1000 + (ones - 3) * 100 : score += ones * 100;
    (twos >= 3) ? score += 200 : score;
    (threes >= 3) ? score += 300 : score;
    (fours >= 3) ? score += 400 : score;
    (fives >= 3) ? score += 500 + (fives - 3) * 50 : score += fives * 50;
    (sixes >= 3) ? score += 600 : score;

    return score;
}

let test1 = [5, 1, 3, 4, 1]; // 250: 250:  50 (for the 5) + 2 * 100 (for the 1s)
let test2 = [1, 1, 1, 3, 1]; // 1100: : 1000 (for three 1s) + 100 (for the other 1)
let test3 = [2, 4, 4, 5, 4]; // 450:  400 (for three 4s) + 50 (for the 5)
let test4 = [4, 4, 4, 3, 3]; // 400

console.log(score(test4));