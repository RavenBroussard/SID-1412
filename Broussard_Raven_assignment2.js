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

var moneySaved = function(bank) 
		console.log("I can't save you any real money today!");
		

//  Boolean Function
var sellPhone = function(savesMoney,justService) {
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

//  Number Function
var phoneCost = function(cashRegister){
	while (cashRegister < 300){
		console.log("I have phones for $300 and lower" + customer + "just for you today!");
		cashRegister+=50;
	} else {
		console.log("I have high end phones" + customer + "that have your name on them.");
	return cashRegister;
};

//  String Function

var phoneServicePackage = function(phone, service){