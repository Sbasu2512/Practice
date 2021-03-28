const prompt = require('prompt-sync')();
var input = prompt('Please enter a phrase to convert to whale language:') ;
//var input = 'turpentine and turtles'
console.log("The phrase you entered is: " + input);
console.log();
var vowel = ['a','e','i','o','u'];
var resultArray = [] ;
for(let i=0; i<input.length; i++){
  // console.log(input[i]);
   for(let j=0; j<vowel.length; j++){
   // console.log(vowel[j]);
   if(input[i] === vowel[j]){
     resultArray.push(input[i]);
     if(input[i] === 'e' || input[i] === 'u'){
       if(input[i] === 'e' || input[i] === 'u'){
         resultArray.push(input[i]);
       }
     }
     
   }
   }
}

resultArray = resultArray.reduce((acc,cE) =>{
  return acc+cE;
})

console.log('This phrase converted to whale languague is: ' + resultArray.toUpperCase());