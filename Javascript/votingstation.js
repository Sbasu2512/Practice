/* */
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) 
{
  var end = [];
  // Your code in here ...
  for(let station of stations)
  {
    var cap = station[1];
    var type = station[2];
    //console.log(cap);
    //console.log(type);
    if(cap >= 20)
    {
      if(type === 'school' || type === 'community centre')
      {
          end.push(station[0])
      }
    }
  }
  return end;
}

console.log(chooseStations(stations));