/*
Wrap the code you've written in a function called loopyLighthouse(range, multiples, words) that you call with 3 parameters.
range should be an array of 2 numbers representing the start and end values for the loop.
multiples should be an array of 2 numbers representing the multiples you want to replace with words.
words should be an array of 2 strings representing the words that will replace the multiples.
The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty",
multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
*/

//helper function isDivisible, determine if a number is divisible by a given denominator
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

/*
let number = 100;
while (number <= 200) {
  if (number % 3 === 0 && number % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (number % 4 === 0) {
    console.log('Lighthouse');
  } else if (number % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(number);
  }
  number ++
}
*/
