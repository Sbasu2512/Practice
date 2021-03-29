class HospitalEmployee {
  //Parent class created
  constructor(
    name //constructor created which takes name as a parameter
  ) {
    this._name = name; //setting properties
    this._remainingVacationDays = 20;
  }

  get name() { //getter method for name
    return this._name;
  }

  get remainingVacationDays() { //getter method for vacation days
    return this._remainingVacationDays;
  }

  takeVacationDays(
    daysOff //this method lets hospital employee to take vacation daysOff
  ) {
    this._remainingVacationDays -= daysOff; //substracting daysOff from remainingVacationDays
  }

  static generatePassword() { // a static method which can only be called by caliing the class it is in.
    let rand = Math.floor(Math.random() * 10000) + 1;
    console.log(rand);

    
  }
}
//extends brings all of the parent’s getters, setters and methods into the child class.
class Nurse extends HospitalEmployee {
  //child class nurse declared.
  constructor(name, certifications) //constructor set 
    {
    super(name); //invoking super i.e, parent's constructor method and passing the values
    this._certifications = certifications;
  }

  get certifications() { //getter method for certifications in nurse class
    return this._certifications;
  }

  addCertification(
    newCertification //add certifications to nurse object
  ) {
    this.certifications.push(newCertification);
  }

  introduction()
    {
      reutrn `Hi I am ${this._name} and I am a nurse`
    }
  
}

class doctor extends HospitalEmployee {
  constructor(name, insurance) 
  {
    super(name);
    this._insurance = insurance;
  }

  get insurance() {
    //insurance getter method that checks if doctor has insurance or not. insurance getter method
    if (this._insurance === "true") {
      return `It is ${this._insurance} that Dr. ${this._name} has insurance.`;
    } else {
      return `It is ${this._insurance} that Dr. ${this._name} has insurance. `;
    }
  }
  
}

const nurseOlynyk = new Nurse("Shivanee", ["Trauma", "Pediatrics"]); //new object created

nurseOlynyk.takeVacationDays(5); //booked vacation days
console.log(nurseOlynyk.remainingVacationDays); //checking remainingVacationDays
console.log();
nurseOlynyk.addCertification("Genetics"); //adding certification called Genetics
console.log(nurseOlynyk.certifications); //printing out certification
console.log();
console.log(Object.values(nurseOlynyk)); //printing out all the values in nurse object
const drShiv = new doctor("Shivanee Sayantan Basu", true);
const drS = new doctor("Sayantan Basu", true);
console.log(drShiv.insurance);
console.log()
console.log(drS.insurance);
console.log()
HospitalEmployee.generatePassword();






