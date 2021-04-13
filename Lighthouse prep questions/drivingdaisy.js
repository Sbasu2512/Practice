/* As Mayor of Codeville, you want one of your legacies to be bettering street design enough to improve traffic flow and reduce congestion. You've decided to start by installing special sensors on some streets to monitor how often cars pass by, and track their speeds.

Complete the logic in the function carPassing. The function, carPassing(cars, speed), takes in an array of car objects, and the speed of a car as it passes the sensor. This function should create a new object with a property called speed, and another property called time and add it to the cars array. We can retrieve the current time, for setting the time property, by using the Date.now() function, which is built into JavaScript! Our function should return an array that includes all of the elements in cars as well as our new element. */

const carPassing = function (cars, speed) {
 
  let time = Date.now()
  var person = {
    time: time,
    speed: speed
  }
  cars.push(person)
  return cars

}
