const middle = function(array) {
  const midIndex = Math.floor(array.length / 2)
    if (array.length <= 2) {
      return [];
    } 
    return array.length % 2 === 0 ? [array[midIndex -1], array [midIndex]] : [array[midIndex]];
  };

  module.exports = middle;