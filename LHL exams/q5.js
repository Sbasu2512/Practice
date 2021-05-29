/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  /* IMPLEMENT ME */
let mean;
let variance;
let deviation = [];
let result;
let sum=0;
let meanDev = 0;
for(let ele of arr){
  sum += ele ;
}
//console.log("sum is: ", sum);
mean = (sum/arr.length);
//console.log("mean is:", mean);
for(ele of arr){
  deviation.push(Math.pow((ele - mean),2));
}
//console.log(deviation);
for(let i of deviation){
meanDev += i ;
}
variance = meanDev/(deviation.length);
//console.log("variance is: ", variance);
result = Math.sqrt(variance)
//console.log(round(result));
return round(result);
}

//stdev([2, 4, 4, 4, 5, 5, 7, 9]);
//stdev([6,2,3,4,9,6,1,0,5]);

console.log(stdev([6,2,3,4,9,6,1,0,5]));