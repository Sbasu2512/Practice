console.log("welcome to age convertor - Check how old will you be if you were a dog");
console.log('\n');
let myAge = prompt('Please enter your age?');
//var myAge = window.prompt("Please enter your age?");
//creating variable name my age

//value saved to this variable will change
var earlyYears = 2;
//calculating the early years
earlyYears *= 10.5 ;
//calculating later years
var laterYears = myAge - 2 ; 
laterYears *= 4 ;
//checking if the program is working okay so far
console.log('My early years age is: ', earlyYears); 
console.log('My later years age is: ', laterYears);
//calclating my age in dog years
var myAgeInDogYears = earlyYears + laterYears;
//storing my name in lowercase
myName = 'Sayantan'.toLowerCase();
//printing out the final result
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);