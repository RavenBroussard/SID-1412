//  Raven "Nikki" Broussard
//  SDI Project 2
//  December 3, 2014

//  Variables

var customer = "John";
var simCard = "Net10";
var cdma = "Page Plus";


console.log( customer )
console.log( simCard )
console.log( cdma )

// Procedure
var moneySaved = function (bank) {
	if (bank < 100) {
		console.log("I can't save you any real money today!");
		}
		else {
		console.log("Good News! I can save you loads of money!");
		};
		
		return;
};

//  Boolean Function
var sellPhone = function (savesMoney,justService) {
		while (savesMoney) {
			if (bank < 100){
				bank ++;
			console.log("Awesome, " + customer + " you now have saved " + bank + " dollars!");
			console.log("let's get your service started");
		} else {
			console.log("Let's get you a new phone and some start savings.");
		needPhone = false;
		};
	};
	return true;
};