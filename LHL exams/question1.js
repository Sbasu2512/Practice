//May 28,2021
/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function (arr) {
  /* IMPLEMENT ME */
  return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  /* IMPLEMENT ME */
  let sum = 0;
  for (let x of arr) {
    sum += x;
  }
  //console.log(sum);
  return sum;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  let length = arr.length;
  let tot = sum(arr);
  /* IMPLEMENT ME */
  // if empty array, return null to indicate that mean cannot be  */
  if ((arr.length = 0)) {
    //console.log("i am here!")
    return null;
  } else {
    //the average value of numbers in a list
    //console.log(" arr.length > 0 ");
    let avg = tot / length;
    //use the provided 'round' function when returning your value
    return round(avg);
  }
};

//console.log(count([1,2,3,4,5]));
//console.log(sum([1,2,3,4,5]));
//console.log(mean([1,2,3,4,5]));
console.log(mean([5]));