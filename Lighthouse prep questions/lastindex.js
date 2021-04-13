/* Define a function lastIndexOf. When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1. */

function lastIndexOf(array, value) 
{
  
  for(let i = array.length; i >= 0; i--){
    if(array[i] == value){
      return i;
    }
  }return -1 ;
  
}