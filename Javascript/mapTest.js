//Use the map method on lighthouses so that we instead see an array of numbers. The array of numbers should be the length of each name in the lighthouses.
const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];
const joinList = ["gists", "types", "operators", "iteration", "problem solving"] ;
const findWaldo = ["Alice", "Bob", "Winston", "Emninem", "Waldo", "paulo"] ;
const Waldo = ["Alice", "Bob", "Waldo", "Winston"];


const length = (array) => {
//extract the length of each element in lighthouses.
let value;
//array of numbers should be the length of each name
value = array.map(e => e.length);
//return value ;
console.log(value);
}
//console.log(length(lighthouses));// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]
length(lighthouses);