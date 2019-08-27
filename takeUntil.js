const takeUntil = function(arr, callback) {
  trueArr = [];
  newArr = [];
  for (const value of arr) {
    trueArr.push(callback(value));
  } 
  for (i = 0; i < arr.length; i++) {
    if (!trueArr[i]) {
      newArr.push(arr[i])
    } else {
      return newArr;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);