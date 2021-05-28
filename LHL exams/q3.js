const round = function(number) {
  return Math.round(number * 100) / 100;
};


const median = (arr) => {
let temp = [] ;
let index, med ;
//let  = 0;
let newArr = arr.sort();
console.log("sorted array is: ", newArr);
//For arrays with one or two elements, there is no middle. Return an empty array.
 if (arr.length % 2 === 0){
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
index = round(arr.length/2);
//arr.splice(index,how many elements to remove)
temp = newArr.splice(index-1,2) ;          
console.log(temp);
let sum = 0;

for(let item of temp){
  sum += item ;
}
med = (sum/2);
} else {
//For arrays with odd number of elements, an array containing a single middle element should be returned.
index = Math.floor((newArr.length-1)/2)
temp.push(newArr[index]) ;
med = temp;
}     
return(round(med));
};

median([1, 2, 3]) // => [2] = 2
median([2,1,3])
median([1, 2, 3, 4, 5]) // => [3] = 3
median([1, 2, 3, 4]) // => [2, 3] = 2.5
median([1, 2, 3, 4, 5, 6]) // => [3, 4] = 3.5
median([3,4,1,2])
//middle(['hello','bae','bye','how you doing','where you going','loser']);

/*1) median
       median([1,2,3]) === 2:
     AssertionError: expected undefined to equal 2
      at Context.<anonymous> (tests/test_02.js:10:12)
      at processImmediate (internal/timers.js:461:21)

  2) median
       median([2,1,3]) === 2:
     AssertionError: expected undefined to equal 2
      at Context.<anonymous> (tests/test_02.js:14:12)
      at processImmediate (internal/timers.js:461:21)

  3) median
       median([1,2,3,4]) === 2.5:
     AssertionError: expected undefined to equal 2.5
      at Context.<anonymous> (tests/test_02.js:18:12)
      at processImmediate (internal/timers.js:461:21)

  4) median
       median([3,4,1,2]) === 2.5:*/