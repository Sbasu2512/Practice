/*Define a function called ageCalculator. This function should take 3 parameters:
name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year
The ageCalculator function should return a string explaining how old the person is.*/

const ageCalculator = (name, yearOfBirth, currentYear) =>
{
  let age = currentYear - yearOfBirth ;
  return `${name} is ${age} years old.` ;
};
//console.log(ageCalculator("Suzie", 1984, 2016));