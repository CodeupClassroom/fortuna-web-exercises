"use strict";

console.log("while loops js");

/*********************************************
 *                   WHILE LOOPS
 *********************************************/
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536


// var i = 2;
//
// while(i <= 65536){
// 	console.log(i);
// 	i *= 2;
// }





// ICE CREAM PROBLEM
	// 1. Generate the total amount of cones to sell for the day --> allCones
	// 2. Now we are in the loop - we need to generate / check how many cones the customer wants to buy --> conesPurchased
	// If conesPurchased > allCones --> I dont have enough cones to sell :( sad path
	// if I do have enough cones -> I can sell them! allCones = allCones - conesPurchased  --> :D
	// repeat this process while allCones > 0
	// Completes the loop --> after the loop I can go home! --> console.log("Yay I sold all my cones!")


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do{
	// This expression will generate a random number between 1 and 5
	var conesPurchased = Math.floor(Math.random() * 5) + 1;

	if(conesPurchased > allCones){
		var sadMessage = "Cannot sell you " + conesPurchased + " I only have " + allCones + " left";
		console.log(sadMessage);

	} else{
		allCones -= conesPurchased;

		var happyMessage = conesPurchased + " cones sold..." + allCones + " cones to go!";
		console.log(happyMessage);
	}

}while(allCones > 0);

console.log("yay i sold all my cones!");






