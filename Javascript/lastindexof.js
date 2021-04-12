//you can inverse the array and use indexOf. then subtract the value from the total length of your array
/* Define a function lastIndexOf.

When this function is given an array and a value, it should return the index of the last time the value occurs in the array. If the value never occurs, the function should return -1.

for example

lastIndexOf([ 5, 5, 5 ], 5); output should be 2
lastIndexOf([ 0, 1, 4, 1, 2 ], 1); output should be 3 

you can inverse the array and use indexOf. then subtract the value from the total length of your array
*/

function lastIndexOf(array, value) 
{
  for(let i=array.length; i>=0; i--){
    if(array[i] == value){
      return i;
    }
  }
  return -1;

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1) );
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));