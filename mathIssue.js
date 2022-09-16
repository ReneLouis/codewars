// https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript

Math.round = function (number) {
  const dec = number % 1;
  return dec < 0.5 ? number - dec : number - dec + 1;
};

Math.ceil = function (number) {
  return number % 1 === 0 ? number : number - (number % 1) + 1;
};

Math.floor = function (number) {
  return number - (number % 1);
};

let n = 0.9;
console.log(Math.round(n));
console.log(Math.ceil(n));
console.log(Math.floor(n));
