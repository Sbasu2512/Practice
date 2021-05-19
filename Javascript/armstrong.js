function armstrong(number){
  const prompt = require('prompt-sync')();
  number = prompt('Please enter a number ');
  
  const numberOfDigits = number.length;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}

if (sum == number) {
    return `${number} is an Armstrong number`;
}
else {
    return `${number} is not an Armstrong number.`;
}
};

console.log(armstrong());