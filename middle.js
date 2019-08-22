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

const middle = function (array) {
  const midIndex = Math.floor(array.length / 2)
    if (array.length <= 2) {
      return [];
    } 
    return array.length % 2 === 0 ? [array[midIndex -1], array [midIndex]] : [array[midIndex]];
  };
