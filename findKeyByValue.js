const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
  let findThisKey = "";
  let keyOfObject = Object.keys(object)
  for (x = 0; x < keyOfObject.length; x++) {
    if (object[keyOfObject[x]] === value) {
      findThisKey = keyOfObject[x];
    } else {
      findThisKey = undefined;
    }
  } return findThisKey;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;