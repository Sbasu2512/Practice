/* Define function called loopyLighthouse(range, multiples, words) that you call with 3 parameters. Range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon". */

const isDivisible = function(numerator, denominator) {
  return numerator % denominator === 0;
};

const loopyLighthouse = function(range, multiples, words) {
  let [countUp, end] = range;
  let [multiple1, multiple2] = multiples;
  let [wordForMultiple1, wordForMultiple2] = words;
  while (countUp <= end) {
    if (isDivisible(countUp, multiple1) && isDivisible(countUp, multiple2)) {
      console.log(wordForMultiple1 + wordForMultiple2);
    } else if (isDivisible(countUp, multiple1)) {
      console.log(wordForMultiple1);
    } else if (isDivisible(countUp, multiple2)) {
      console.log(wordForMultiple2);
    } else {
      console.log(countUp);
    }
    countUp++;
  }
};