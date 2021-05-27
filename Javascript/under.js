const judgeAGrade = (grade, evaluationAction) => {
  if(evaluationAction(grade)) {
    console.log('GOOD JOB');
  } else {
    console.log('I AM A DISAPPOINTMENT');
  }
}

const strictParents = grade => grade>90 ;
const relaxParents = grade => grade>55 ;
const compass = () => true ;

judgeAGrade(15, compass);
judgeAGrade(55, relaxParents);
judgeAGrade(95, strictParents);
judgeAGrade(45, strictParents);
judgeAGrade(54, relaxParents);