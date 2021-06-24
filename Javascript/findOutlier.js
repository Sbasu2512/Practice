/***You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N. */

function findOutlier(integers){
  let isEven ;
  
  if(integers.length < 3){
    return ;
  }
  integers.forEach((ele)=>{
    if(ele % 2 !== 0){
      isEven = false;
    }
    isEven = true;
  });
   
  
if(isEven){
for(let ele of integers){
    if(ele !== 0){
      num = ele;
    }
  }
}
  for(let ele of integers){
    if(ele % 2 === 0){
      num = ele;
    }
  }
return num;
}


console.log(findOutlier([1, 2, 3]));