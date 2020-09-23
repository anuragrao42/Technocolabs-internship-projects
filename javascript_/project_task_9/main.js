let raceNumber = Math.floor(Math.random() * 1000);

var registrationTime = prompt(
  "do you want to register early or late? (Type 'early' for early and vice-versa "
).toLowerCase();

var bool = registrationTime === "early" ? true : false;
var age = prompt("Enter your age");

//control flow

if (bool && age > 18) {
  raceNumber += 1000;
}
if (age > 18) {
  console.log(
    `Your race will start at ${
      bool ? `9:30am` : `11:00am`
    }. Your Race Number:  ${raceNumber}`
  );
} else if (age < 18) {
  console.log(
    "Your race will start at 12:30pm. Your Race Number :  " + raceNumber
  );
} else {
  console.log("Please, visit our Registration Desk!");
}
