const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let newArray = [];
  for (const index in array) {
    if (!Array.isArray(array[index])) {
      newArray.push(array[index]);
    } else if (Array.isArray(array[index])) {
      for (let x = 0; x < (array[index]).length; x++)
        newArray.push(array[index][x]);
    }
  } return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;