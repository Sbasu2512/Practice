/* Define a function called concat.The function should, when given two arrays, concatenate the arrays together. */

function concat(x,y){
  // this.x= x;
 //  this.y = y;
  //let length = x.length + y.length;
   let z = [];
   let pos = 0;
 
   for(let element of x){
     z[pos] = element;
     pos++;
     
   }
 
   for(let element of y){
     z[pos] = element;
     pos++;
   }
 
   return z ;
 
 }
 
 concat([1,2,3],[4,5,6])