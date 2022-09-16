// https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

var fibonacciOriginal = function (n) {
  if (n == 0 || n == 1) return n;
  return fibonacciOriginal(n - 1) + fibonacciOriginal(n - 2);
};

var fibonacci = function (n) {
  const arr = [1, 0];
  let num;
  if (n == 0 || n == 1) return n;
  // return fibonacci(n - 1) + fibonacci(n - 2);

  for (let i = 2; i <= n; i++) {
    try {
      num = arr[0] + arr[1];
      arr.unshift(num);
    } catch (err) {
      console.log(err);
      return `Error while calculating fibonacci(${n}).`;
    }
  }
  return num;
};

let test = 4;

console.log(fibonacciOriginal(test));
console.log(fibonacci(test));
