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

//////////////////////////////////////////////////
// Task #3
// misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).
// When you have finished the work, click "Run Tests" to see if your code is working properly.
// misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

let a1 = 'A',
  a2 = 'a',
  b1 = 'B',
  b2 = 'b',
  c1 = 'C',
  c2 = 'c',
  d1 = 'D',
  d2 = 'd',
  e1 = 'E',
  e2 = 'e',
  n1 = 'N',
  n2 = 'n';

function Dad() {
  return d1 + a2 + d2;
}

function Bee() {
  return b1 + e2 + e2;
}

function banana() {
  return b2 + a2 + n2 + a2 + n2 + a2;
}

function answer1() {
  return 'no';
}
function answer2() {
  return 'no';
}
function answer3() {
  return 'yes';
}

// let a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"

// const Dad = () => d1 + a2 + d2
// const Bee = () => b1 + e2 + e2
// const banana = () => b2 + a2 + n2 + a2 + n2 + a2

// const answer1 = () => "no"
// const answer2 = () => "no"
// const answer3 = () => "yes"

// Task #4
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.
function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  let el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}

// Task #5
// Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

function animal(obj) {
  const message = `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  return message;
}

const objAnimals = { name: 'dog', legs: 4, color: 'white' };
const result = animal(objAnimals);
console.log(result);

// function animal(obj){
//   const { color, legs, name } = obj;

//   return `This ${color} ${name} has ${legs} legs.`;
// }

// const objAnimals = { name: "dog", legs: 4, color: "white" };
// const result = animal(objAnimals);
// console.log(result);

// Task #6
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.
function trueOrFalse(val) {
  if (
    val === false ||
    val === null ||
    val === undefined ||
    val === NaN ||
    val === 0 ||
    val === -0 ||
    val === ''
  ) {
    return 'false';
  } else {
    return 'true';
  }
}

// Task #7
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

// number of hotdogs	price per unit (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.
function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

// Task #8
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// Tip: Using default for most of the cases can reduce your work.

function howManydays(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      return undefined;
  }
}
// Task #9
// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

function padIt(str, n) {
  let paddedStr = str;
  let i = 0;

  do {
    if (i % 2 === 0) {
      paddedStr = '*' + paddedStr;
    } else {
      paddedStr = paddedStr + '*';
    }
    i++;
  } while (i < n);

  return paddedStr;
}
////
function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*';
  }
  return str;
}
// Task #10
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

function pickIt(arr) {
  let odd = [],
    even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}
/////
function pickIt(arr) {
  let odd = [];
  let even = [];

  for (var x of arr) {
    (x % 2 ? odd : even).push(x);
  }

  return [odd, even];
}
/////
const pickIt = arr =>
  arr
    .reduce(
      (result, number) => (result[number % 2].push(number), result),
      [[], []]
    )
    .reverse();
