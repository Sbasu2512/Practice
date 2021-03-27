//declaring variables
let levelUp = 100;
let powerLevel = 900 ;
let multiplyMe = 30;
let quarterMe = 500;
const myName = 'Sayantan' ;
const myCity = 'Kolkata' ;
const mydob = '25 December 1992' ;
const myAge = 29;
//math operators
levelUp += 100 ;        
powerLevel -= 500 ;
multiplyMe *= 90;
quarterMe /= 4
//printing values to the console
console.log('The value of level up:' + levelUp);  
console.log('The value of power level:' + powerLevel)
console.log('The value of multiply me:' + multiplyMe)
console.log('The value of quarter up:' + quarterMe)
levelUp-- ;  //increment operator
powerLevel++; //decrement operator
//printing new values to the console
console.log('The new value of level up is:', levelUp); 
console.log('The new value of power level is:', powerLevel);
//using template literals to join a string
console.log(`My name is ${myName}, I am from ${myCity} and I was born on ${mydob}. Today I am ${myAge} years old !`);
//using typeof operator to print out the data type of our variables
console.log('The data type of level up is:' + typeof levelUp);
console.log('The data type of power level is:' + typeof powerLevel);
console.log('The data type of multiply me is:' + typeof multiplyMe);
console.log('The data type of quarter up is:' + typeof quarterUp);
console.log('The data type of my name is:' + typeof myName);
console.log('The data type of my city is:' + typeof myCity);
console.log('The data type of my dob is:' + typeof mydob);
console.log('The data type of my age is:' + typeof myAge);
//finding out number of characters in myname
console.log('The number of characters in my name is: ' + myName.length);