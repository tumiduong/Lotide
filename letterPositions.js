const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    if (!results[sentence[x]]) {
      results[sentence[x]] = [x];
    } else if (Array.isArray(results[sentence[x]])) {
      results[sentence[x]].push(x);
    }
  } delete results[" "];
  return results;
};

console.log(letterPositions("hello there"));

module.exports = letterPositions;