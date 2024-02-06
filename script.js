'use strict';

// Task #1
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
  if (!Array.isArray(array) || array.length <= 1) {
    return 0;
  }
  let min = Math.min(...array);
  let max = Math.max(...array);
  let arraySum = array.reduce((acc, num) => acc + num, 0);

  let result = arraySum - min - max;

  return result;
}

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

sumArray = arr =>
  Array.isArray(arr) && arr.length >= 2
    ? arr
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, num) => acc + num, 0)
    : 0;

//////////////////////////////////////////////////
// Task #2
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// In the end, click "Submit" to submit your code pass this kata.
let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

function equal2() {
  let a = v4,
    b = v2;
  return a - b;
}

function equal3() {
  let a = v5,
    b = v1;
  return a * b;
}

function equal4() {
  let a = v4,
    b = v5;
  return a / b;
}

function equal5() {
  let a = v6,
    b = v3;
  return a % b;
}
// var v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250;

// const equal1 = () => v1 + v1;
// const equal2 = () => v3 - v1;
// const equal3 = () => v1 * v5;
// const equal4 = () => v4 / v5;
// const equal5 = () => v2 % v4;

// console.log(equal1()); // 100
// console.log(equal2()); // 100
// console.log(equal3()); // 100
// console.log(equal4()); // 100
// console.log(equal5()); // 100
