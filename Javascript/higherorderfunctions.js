 //Function declared that checks if 2+2 =4 a million times
    const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {              
      for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
          console.log('Something has gone very wrong :( ');                   
        }
      }
    };
    
    //function declared which takes number as an argument and adds 2 too it.
    const addTwo = num => num + 2;  
    
    //function declared which takes function as an argument, saves time, invokes the call back function, records the time taken for calling the function and returns the time took by subtracting the starting time from the ending time. This is a higher-order function.
    const timeFuncRuntime = funcParameter => {        
    let t1 = Date.now();
      funcParameter();
      let t2 = Date.now();
      return t2 - t1;
    };
    
    // This checks the runtime of checkThatTwoPlusTwoEqualsFourAMillionTimes and stores in variable time2p2.
    const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
    
    //this is another higher-order function that takes a function parameter & a value as argument and checks if the result is same. If it is same then it returns the value.
    const checkConsistentOutput = (func, val) =>{
      let ftry = func(val);
      let stry = func(val);
      if(ftry === stry){
        return ftry;
      }else{
        return 'This function returned inconsistent results';
      }
    };
    
     //invoking the function with addTwo as the function argument and 2 as the value
    checkConsistentOutput(addTwo, 2);
    
    console.log(checkConsistentOutput(addTwo, 2)); //OUTPUT: 4

    console.log(addTwo(5));
    