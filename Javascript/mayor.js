/* For this challenge you'll have to implement a function called finalPosition(moves), which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following.

Your function will receive an array of moves, which are strings that say either north, south, west, or east, these represent the parade moving in a particular direction by a single space on the grid. By looking at the path that the parade moves in, your function should calculate and then return an array representing the position of the parade after completing all of the moves. The first element of the array should be the X position, and the second element of the array should be the Y position. The parade begins at [0,0]. */
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = (moves) => {
  var position = [0,0]
  for (var move of moves) {
    switch(move) {
      case('north'):
        position[1]++
        break;
      case('south'):
        position[1]--
        break;
      case('east'):
        position[0]++
        break;
      case('west'):
        position[0]--
        break;
        default:
        break;
    }
  }
  return position
}

console.log(finalPosition(moves));