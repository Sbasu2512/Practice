//value assigned to kelvin
var kelvin = 293 ;
//converting it to celsius
const celsius = 273 - kelvin ;
//declaring, initializing and converting fahrenheit to celsius
var fahrenheit = celsius*(9/5) + 32;
//getting rid of decimal point
fahrenheit = Math.floor(fahrenheit) ;
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
var newton = celsius*(33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);