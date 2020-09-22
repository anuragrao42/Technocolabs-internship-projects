//today's forecast
const kelvin = 293;
//Kelvin temp converted to Celsius
const celsius = kelvin - 273;
//Celsius to fahrenheit
var fahrenheit = (9 / 5) * celsius + 32;
//rounding off fahrenheit using floor function
fahrenheit = Math.floor(fahrenheit);

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit");

//Ceslius to Newton
var newton = (33 / 100) * celsius;
newton = Math.floor(newton);
console.log("The temperature is " + newton + " degrees Newton.");

// 0 deg. Kelvin can be represented as -460 deg. Fahrenheit!!
