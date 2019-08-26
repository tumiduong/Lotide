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

module.exports = eqArrays;