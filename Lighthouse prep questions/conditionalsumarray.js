/* Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0. */
const conditionalSum = function(values, condition) {
 let sum = 0;
 
 switch (condition) 
    {
      case "even":
       for(let i=0; i<values.length; i++){

        if(values[i]%2 === 0)
        {
          sum = sum + values[i];
          
        }
       }
        break;
      
      case "odd":
        for(let i=0; i<values.length; i++){
   
          if(values[i]%2 !== 0){
            sum = sum + values[i];
          }
        }
        break;
    
      default:
        return 0 ;
    }
 
  return sum;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));       //output should be 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));        //output should be 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));  //output should be 144
console.log(conditionalSum([], "odd"));                     //output should be 0

/*switch (condition) 
    {
      case 'even':
        if(values[i]%2 == 0)
        {
          sum = sum + values[i];
          return sum;
        }
        break;
      
      case 'odd':
        if(values[i]%2 !== 0){
          sum = sum + values[i];
          return sum;
        }
        break;
    
      default:
        return 0 ;
        break;
    }*/