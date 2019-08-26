const assertEqual = require("./assertEqual");

const countLetters = function(givenString) {
  const results = {};
  for (const letter of givenString) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  } return results;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;