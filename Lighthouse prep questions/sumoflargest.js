/*In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.

*/

const sumLargestNumbers = function(data) {
  // Put your solution here
  let first, second;
  if (data[0] > data[1])
  {
      first = data[0];
      second = data[1];
  }
  else
  {
      first = data[1];
      second = data[0];
  }
 
  // Traverse remaining array and
  // find first and second largest
  // elements in overall array
  for (let i = 2; i < data.length; i++)
  {
      /* If current element is greater
         than first then update both
         first and second */
      if (data[i] > first)
      {
          second = first;
          first = data[i];
      }
 
      /* If arr[i] is in between first
         and second then update second */
      else if (data[i] > second &&
        data[i] != first)
          second = data[i];
  }
  return (first + second);

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));