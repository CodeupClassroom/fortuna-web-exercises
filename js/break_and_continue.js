"use strict";

console.log("break and continue");

//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.



do{
	var userNumber = Number(prompt("Please enter a number between 1 and 50"));

	if(userNumber < 1 || userNumber > 50){
		alert(userNumber + " is not between 1 and 50, please enter again");
	} else if (userNumber % 2 === 0){
		alert(userNumber + " is not odd! Please enter again.");
	} else if ( isNaN(userNumber)){
		alert(userNumber + " is not a number! Please enter again!");
	} else {
		alert("Congrats, you picked the right number!");
		break;
	}

} while (true);


// VERSION 1

// for(var i = 1; i <= 50; i++){
// 	// console.log("Current iteration #: " + i);
//
// 	if(i % 2 === 0){
// 		continue;
// 	}
//
// 	if(i === userNumber){
// 		console.log("Yikes! Skipping number: " + userNumber);
// 	} else{
// 		console.log("Here is an odd number: " + i);
// 	}
//
// }

///VERSION 2
for(var i = 1; i <= 50; i+=2) {
	if(i === userNumber) {
		console.log("Yikes! Skipping number: " + userNumber);
		continue;
	}
	console.log("Here's an odd number " + i);
}






// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.









