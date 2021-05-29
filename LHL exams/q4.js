/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(array) {
  /* IMPLEMENT ME */
  if(array.length == 0)
        return null;
    let result = [];
    let popular = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        let el = array[i];
        if(result[el] == null)
        result[el] = 1;
        else
        result[el]++;  
        if(result[el] > maxCount)
        {
            popular = el;
            maxCount = result[el];
        }
    }
    return popular;

};

console.log(mode([6,2,3,4,2,6,1,0,5]));

