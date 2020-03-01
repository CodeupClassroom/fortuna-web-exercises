"use strict";


console.log("hello from for loops");


// showMultiplicationTable(7)
// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 3 = 21
// 7 * 4 = 28
// 7 * 5 = 35 .....

// input "x" i "=" input * i

// function showMultiplicationTable(input){
// 	for(var i = 1; i <= 10; i++){
// 		var answer = input * i;
//
// 		// var returnMessage = input + " x " + i + " = " + answer;
//
// 		console.log(input + " x " + i + " = " + answer);
// 	}
// }
//
// showMultiplicationTable(7)








//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.

// 1. for loop --> var i = 0; i < 10; i++;
// 2. Generate a random number between 20 & 200 --> Math.floor
// 3. we need to check the randomNumber
//      if its even --> console.log(randomNumber is even) --> randomNumber % 2 === 0
//      else its odd --> console.log(randomNumber is odd)



// for(var i = 0; i < 10; i++){
// 	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//
// 	var randomNumber = Math.floor(Math.random() * 180) + 20;
//
// 	if(randomNumber % 2 === 0){
// 		console.log(randomNumber + ' is even');
// 	} else {
// 		console.log(randomNumber + ' is odd');
// 	}
//
// }




// repeat numbers .... 1 22 333 4444

// for(var i = 1; i < 10; i++){
// 	console.log(i.toString().repeat(i));
// }


// for(var outer = 1; outer < 10; outer++){
// 	console.log("outer loop");
// 	var output = "";
//
// 	for(var inner = 1; inner <= outer; inner++){
// 		console.log("inside inner loop");
// 		output += outer;
// 	}
//
// 	console.log(output);
//
// }






// 100 --> 5 down by 5


// for(var i = 100; i >= 5; i-=5){
// 	console.log(i);
// }



for(var i = 100; i >=5; i--){

	if(i % 5 === 0){
		console.log(i);
	}
}














