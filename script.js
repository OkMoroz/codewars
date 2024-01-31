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
