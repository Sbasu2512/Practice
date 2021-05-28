const min = function (arr) {
  /* IMPLEMENT ME */
  let smallNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallNum > arr[i]) {
      smallNum = arr[i];
    }
  }
  return smallNum;
};

const max = function(arr) {
  /* IMPLEMENT ME */
  let bigNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > bigNum) {
      bigNum = arr[i];
    }
  }
  return bigNum;
};
const range = function(arr) {
  /* IMPLEMENT ME */
  let smallNum = min(arr) ;
  let bigNum = max(arr) ;
  return bigNum - smallNum ;
};

console.log(min([1,3,4,6,5,8]));    //1
console.log(max([1,3,4,6,5,8]));    //8
console.log(range([1,3,4,6,5,8]));  //8-1 =7