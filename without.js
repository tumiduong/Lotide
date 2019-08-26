//const without = function(origArray, itemsToRemove) {
//  const newArray = [];
//  for (x = 0; x < origArray.length; x++) {
//    for (y = 0; y < itemsToRemove.length; y++) {
//      if (origArray[x] !== itemsToRemove[y]) {
//        newArray.push(origArray[x]);
//      }
//    }
//  } return newArray;
//};

const without = function(origArray, itemsToRemove) {
  const newArray = [];
  for (x = 0; x < origArray.length; x++) {
      if (!itemsToRemove.includes(origArray[x])) {
        newArray.push(origArray[x]);
    }
  } return newArray;
};

console.log(without([1, 2, 3, 4, 5, 6], [2, 3, 5]));

module.exports = without;