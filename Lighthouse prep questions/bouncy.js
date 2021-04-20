/* Each shape has a different calculation for determining volume, so we'll need to create a few functions that will help us figure out the volume of the various inflatable attractions.

In this challenge, we'll need to implement four functions.

The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth
The fourth function, totalVolume(), will receive an array containing the different shapes that make up a single attraction. The totalVolume function should use the previous three functions to calculate the total volume of an attraction.
*/

const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return 4 / 3 * PI * Math.pow(radius, 3);
}

const coneVolume = function (radius, height) {
  return PI * Math.pow(radius, 2) * height / 3;
}

const prismVolume = function (height, width, depth) {
  return height * width * depth;
}

const totalVolume = function (solids) {
  let volume = 0;
  for(const solid of solids){
    switch(solid.type){
      case 'sphere':
        volume += sphereVolume(solid.radius);
        break;
      case 'cone':
        volume += coneVolume(solid.radius, solid.height);
        break;
      case 'prism':
        volume += prismVolume(solid.height, solid.width, solid.depth);
        break;
      default:
        volume += 0;
    }
  }
  return volume;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
console.log(prismVolume(3, 4, 5) === 60);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);