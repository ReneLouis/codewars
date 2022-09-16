// https://www.codewars.com/kata/53db96041f1a7d32dc0004d2/train/javascript

function doneOrNot(board) {
  let errMess = "Try again!";

  let isTotalFortyFive = function (region) {
    // Check total = 45 and all number 1 - 9 present in the region.
    let total = 0;
    let incr = 0;
    const sortedRegion = [...region].sort((a, b) => a - b);

    for (const value of sortedRegion) {
      incr += 1;
      // console.log(`incr = ${incr} ; value = ${value} ; ${value === incr} `);
      if (value !== incr) return false;
      total += value;
    }
    return total === 45;
    // console.log(region);
  };

  // A -  check in each row.
  console.log(" ===== CHECKING ROWS ===== ");
  for (let i = 0; i <= 8; i++) {
    if (!isTotalFortyFive(board[i])) return errMess;
  }

  // B - check in each region (3x3)
  console.log(" ==== CHECKING REGIONS ==== ");
  for (let i = 0; i <= 6; i += 3) {
    for (let j = 0; j <= 6; j += 3) {
      let region = [];
      // console.log(`i = ${i} ; j = ${j}`);
      board.slice(i, i + 3).forEach((row) => {
        row.slice(j, j + 3).forEach((e) => region.push(e));
      });
      // console.log(`region is: ${region}`);
      if (!isTotalFortyFive(region)) return errMess;
    }
  }

  // C - check in each column
  for (let i = 0; i <= 8; i++) {
    region = [];
    board.forEach((row) => region.push(row[i]));
    // console.log(`Column ${i + 1} is: ${region}`);
    if (!isTotalFortyFive(region)) return errMess;
  }

  return "Finished!";
}

let test1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]; // "Finished!"

let test1b = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]; // "error"

let test2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 9],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9],
]; // "Try again!"

let test4 = [
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5],
];

console.log(doneOrNot(test4));
