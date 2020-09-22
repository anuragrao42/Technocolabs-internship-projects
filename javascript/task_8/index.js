//giving a choice to user to enter his name
var userName = prompt("Enter your name ( NOT Important )");
//ternary operator on condition that userName is provided or not
userName ? console.log(`Hello, ${userName} !`) : console.log("Hello!");
//user asks a question
var userQuestion = prompt("Ask your question!");
console.log(userQuestion);
//generates a random between 0 to 7 , to decide for eightBall to give random answers!!
var randomNumber = Math.floor(Math.random() * 8);

var eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "Reply hazy try again";
    break;
  case 2:
    eightBall = "It is decidedly so";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}
console.log(eightBall);
