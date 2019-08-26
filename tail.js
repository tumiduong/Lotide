const tail = function(words) {
  let newArray = [];
  if (words.length === 1 || words.length === 0) {
    newArray = [];
  } else {
    for (let x = 1; x < words.length; x++) {
      newArray.push(words[x]);
    }
  }
  return newArray;
};

module.exports = tail