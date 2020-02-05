"use strict";

// console.log("hello from external js");

// 1. Use the alert function to show a message that says 'Welcome to my Website!'.

// alert("Welcome to my Website!");


// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

// 	For example, if the user enters "blue", your code should alert a message that says:

// 	"Great, blue is my favorite color too!"

// var userColor = prompt("What is your favorite color?");
//
// var alertMessage = "Great, " + userColor + " is my favorite color too!";
//
// alert(alertMessage);


// (3) Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.


//3.1 movie rental question
// 1. ask user what the rental fee is -> prompt & variable
// 2. ask user how many days for LM -> prompt & variable
// 3. ask user how many days for BB -> prompt & variable
// 4. ask user how many days for H -> prompt & variable
// 5. calculate -> rental fee * total days
// 6. alert the total cost

// var dailyRentalRate = Number(prompt("How much is the daily rental rate?"));
//
// console.log(dailyRentalRate);

// var littleMermaid = Number(prompt("How many days are you renting the little mermaid?"));
//
// var brotherBear = Number(prompt("How many days are you renting brother bear?"));
//
// var hercules = Number(prompt("How many days are you renting hercules?"));
//
// var totalCost = (littleMermaid + brotherBear + hercules) * dailyRentalRate;
//
// alert("You owe: $" + totalCost);









// 3.2 Contractor Question: Google, Amazon, Facebook

// var googleRate = Number(prompt("What is your google rate?"));
// var amazonRate = Number(prompt("What is your amazon rate?"));
// var facebookRate = Number(prompt("What is your facebook rate?"));
//
//
// var googleHours = Number(prompt("How many hours did you work at google?"));
// var amazonHours = Number(prompt("How many hours did you work at amazon?"));
// var facebookHours = Number(prompt("How many hours did you work at facebook?"));
//
//
// var totalPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);
//
// var alertMessage = "Your total pay is $" + totalPay;
// alert(alertMessage);



//3.3 Class registration

// var classIsNotFull = confirm("Class is not full");
// var noScheduleConflicts = confirm("Schedules do not conflict");
//
// var studentEnrolledStatus = classIsNotFull && noScheduleConflicts;
// alert("Student can enroll: " + studentEnrolledStatus);






// 3.4 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var numberOfItems = Number(prompt("How many items are you buying?"));
var offerIsValid = confirm("Is the offer valid?");
var isPremiumMember = confirm("Are you a premium member?");

var discountAppliedStatus = offerIsValid && (isPremiumMember === true|| numberOfItems > 2);
alert("Can use discount: " + discountAppliedStatus);






