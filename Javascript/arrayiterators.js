let array = ['Iron Man', 'Spiderman', 'Batman', 'Thor', 'red' , 'ro', 'salt', 'sugar', 'star anise'];
//using .forEach method
array.forEach(function(element ) {
    
    console.log('Result of forEach method is: ' + element);
    console.log();
});
//using .map method
let avengers = array.map((element) => {
return element = ' Avenger ' + element ;
});
console.log('Result of .map method are: ' + avengers);
console.log();
//using filter method
let short = array.filter((element) => {
    return element.length <5 ;
});
console.log('result of filter method are: ' + short);
console.log();
//using find method
let shortIndex = array.find((element) => {
    return element.length < 3;
});
console.log('Result of find method are: ' + shortIndex);
console.log();
//using find index method
let index = array.findIndex((element) => {
    return element.length > 8;
});
console.log('Result of find method are:');
console.log('Index is: ' + index);
console.log();
