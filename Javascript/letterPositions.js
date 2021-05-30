const letterPositions = function(sentence) {
  let result = {};
  let index;
  // logic to update results here
  for (let letter of sentence) {
    if (result[letter]) {
      final[letter] += 1;
    } else {
      final[letter] = 1;
    }
  }
 console.log(typeof(final));
  return final ;
};

