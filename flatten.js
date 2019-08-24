const eqArrays = function(array1, array2) {
  let arrayEq = "";
  for (i = 0; i < array1.length; i++) {
    for (x = 0; x < array2.length; x++) {
      if (array1[i] === array2[x]) {
        arrayEq = true;
      } else {
        arrayEq = false;
      }
    }
  } return arrayEq;
};

const assertArraysEqual = function(array1, array2) {
  result = eqArrays(array1, array2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑 Asseration Failed: [${array1}] !== [${array2}]`);
  }
};

const flatten = function(array) {
  let newArray = [];
  for (const index in array) {
    if (!Array.isArray(array[index])) {
      newArray.push(array[index]);
    } else if (Array.isArray(array[index])) {
      for (x = 0; x < (array[index]).length; x++)
      newArray.push(array[index][x]);
    }
  } return newArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));