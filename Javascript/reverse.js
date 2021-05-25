const reverse = (arr) => {
  
  for (i = 0; i < arr.length; i++) {
    let newArr = "" ;
    for (let j = arr[i].length-1; j >= 0; j--){
      newArr += arr[i][j] ;
    }
    console.log(newArr);
  }
 
 

};

reverse(["uthechen", "maharani", "shivanee"]);
//console.log(reverse(['maharani','shivanee']));

/*let temp = [] ;
 while(start<end){
   temp = arr[start];
   arr[start] = arr[end];
   arr[end] = temp ;
   start++;
   end--;
 }

 for(let i=0; i<arr.length; i++){
   console.log(arr[i]);

let start = 0; 
  let i=0 ;
  let end = arr[i].length-1 ;
  let disArr = [] ;
  
  for (i = 0; i < arr.length; i++) {
    for (let j = arr[i].length-1; j >= 0; j--) {
      console.log(arr[i][j]);
      //arr.push(arr[i][j]);
      //newArr.push(arr[i][j]);
      temp = arr[start];
   arr[start] = arr[end];
   arr[end] = temp ;
   start++;
   end--;
    }
    disArr = newArr.shift();
  }
  return disArr;

 }*/