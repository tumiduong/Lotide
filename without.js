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
  for (const item1 of origArray) {
    console.log(item1)
      if (!itemsToRemove.includes(origArray[item1])) {
        newArray.push(origArray[item1]);
    }
  } return newArray;
};

console.log(without([1, 2, 3, 4], [2, 3]));