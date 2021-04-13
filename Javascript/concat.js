/* Define a function called concat

The function should, when given two arrays, concatenate the arrays together. 

*/

function concat(x,y){
  
   let z = [];
   let pos = 0;
 
   for(let element of x){
     z[pos]=element;
     pos++;
     
   }
 
   for(let element of y){
     z[pos]=element;
     pos++;
   }
 
   return z ;
 
 }
 
 


console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));


/*console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);*/