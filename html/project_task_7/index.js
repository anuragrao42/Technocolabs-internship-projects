//assign your age
const myAge = 20;
//The first two years of a dog’s life count as 10.5 dog years each, which are represented as earlyYears
var earlyYears = 2;
earlyYears *= 10.5;
//Each year following equates to 4 dog years, represented as laterYears
var laterYears = myAge - 2;
laterYears *= 4;
//myage converted in dog years
var myAgeInDogYears = earlyYears + laterYears;
//converts my name to lowercase
var myName = "Anurag".toLowerCase();
// output string
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
