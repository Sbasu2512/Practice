//Write code to filter this list down to only passing grades.This node script should print out passing grades to the console. Passing grades for this scenario can be those that are 70 or above.
const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const judge = grades => {
let result = grades.filter((grade) => {
  if(grade >= 70) {
    console.log( "🎉🎉🎉🎉 ----- PASSED with", grade ,"% --- best of luck for future!");
    if(grade >= 80){
      console.log("🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽🙌🏽 ----------- FIRST CLASS PASSED with ", grade, "% --- congrats we are proud of you!");
      if(grade >=90){
        console.log("💯✔🏁💯✔🏁💯✔🏁💯✔🏁💯✔🏁 ------------- first class pass with distinction acheiving a grade of", grade, "% --- congrats we are proud of you! Done and dusted, really great guys! We look forward to how you change the world or other amazing things you do!");
      }
    }
  }
  return grades >= 70 ; 
});
 return result ;
}
console.log(judge(grades));

/*
//We are declaring a function which simply checks each element of an array. 
const gradeChecker = grade => {
 return grade >= 70;
}
// in this example, we are utilizing implied return if there is only one line of code. we do not need the curly braces either. we are using arrow function syntax.
console.log(grades.filter(grade => grade >=70)); 
// we are using .filter method outside of the function to utilize its call back function

//in the example below, we are using a function declaration to declare our call back function.
console.log(grades.filter(function (grade) {
  return grade >=70;
}));
*/







