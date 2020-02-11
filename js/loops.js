"use strict";

// JS for Loops Lecture

do {
	var userPrompt = prompt("enter a color");
	console.log(userPrompt)    
} while(userPrompt.toLowerCase() !== "blue");

// Fizzbuzz
for(var i = 1; i<= 100; i++) {
	if(i % 3 == 0 && i % 5 == 0) {
		console.log("FizzBuzz")
	}
}