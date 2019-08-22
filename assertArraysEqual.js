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

assertArraysEqual([1, 2, 3], [1, 2, 3, 5]);