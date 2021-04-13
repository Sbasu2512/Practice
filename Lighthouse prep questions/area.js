/*Create the following 3 functions with the correct logic to calculate the area of that shape.

calculateRectangleArea(length, width)
calculateTriangleArea(base, height)
calculateCircleArea(radius)
The parameters to the functions will always be numbers.

Each function should return a number that corresponds to the area of the shape. Here is the math for each of the shapes:

rectangle: length × width
triangle: base × height / 2
circle: π × radius2
If any of the parameters are negative, the function should return undefined.*/

const calculateRectangleArea = (length, width) => {
  this._length = length ;
  this._width = width ;
  if(typeof length === 'number' &&  typeof width === 'number'){
    if(length >= 0 && width >= 0) {
      var rarea = length * width;
      return rarea;
    }
    
  }
  
}
let calculateTriangleArea = (base, height) => {
  this._base = base ;
  this._height = height ;
  if(typeof base === 'number' && typeof height === 'number')
  {
    if(base >= 0 && height >= 0)
    {
      var tarea = (base * height) / 2;
      return tarea ;
    }
  }
}

function calculateCircleArea(radius) {
  this._radius = radius ;
  //var pi = Math.PI;
  if(typeof radius === 'number'){
    if(radius >= 0){
      var carea = Math.PI * (radius * radius) ;
      return carea;
    }
  }
  
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined
console.log();

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined
console.log();

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
console.log();
