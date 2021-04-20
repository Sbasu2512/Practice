const instructorWithLongestName = function(instructors) {
  let longestName = instructors[0].name.length; 
  let name = '';
  for(let i = 1; i < instructors.length; i++) {
    if(instructors[i].name.length > longestName) {
      longestName = instructors[i].name.length; //?
      name = instructors[i].name; //?
      course = instructors[i].course;
    }
    
  }
  return { 'name': name, 'course': course};
};

