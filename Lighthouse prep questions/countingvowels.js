/* In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u. */

const numberOfVowels = function(data) {
  
  const vowels = ["a", "e", "i", "o", "u"];
  
  let counter = 0;

  // Loop through data to test if each character is a vowel
  for (let letter of data.toLowerCase()) {
      if (vowels.includes(letter)) {
          counter++;
      }
  }

  // Return number of vowels
  return counter;
};

console.log(numberOfVowels("orange"));            //3
console.log(numberOfVowels("lighthouse labs"));   //5
console.log(numberOfVowels("aeiou"));             //5