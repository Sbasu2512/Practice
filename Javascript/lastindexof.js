function lastIndexOf(array, value) 
{
  let n = array.length ;
  let i = 0 ;
  while(i<n){
    if(array[i] === value){
      
      break;
    }i++;
    
  }
  if(i<n){
      return i;
    }else{
      return -1;
    }


}