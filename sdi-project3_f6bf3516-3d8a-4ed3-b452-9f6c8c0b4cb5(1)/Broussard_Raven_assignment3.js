//  alert("JavaScript works!");

//  Raven "Nikki" Broussard
//  SDI 1412  Project 3
//  December 11, 2014

//  variables

var customerName = "John";
var store = "Wilson's Electronics";
var money = 800;
var whatCustomerBuys = ["1 Samsung Phone", "1 activation & month of service", "2 chargers", "2 cases"];
var inventory = {
	"equipment": "Samsung Phone",
	"protection": "cases",
	"plan": "activation & month of service",
	"power": "chargers"
	};

console.log(customerName + " enters " + store + " to get set up with a new phone and new service." )
console.log(customerName + " has a budget of " + money + " to spend today.")
console.log("If, " + customerName + " has money left over he will buy more airtime.")

// Json 

var handleData = function(json){
	for (var i = 0; i <json.purchase.length; i++) {
	var purchase = jason.purchase[i];
		console.log("Equipment: " + purchase.equipment + ", Type: " + purchase.type + ", Quantity: " + purchase.quantity);
		};
	};
	
	
//  Objects

var wishList = function() {
	for (var key in purchase) {
console.log("John went to the counter " + key + " and selected " + purchase[key]);
};
return "John got everything he came for.";
};
var newWishList = function(newEquipment,newProtection,newPlan,newPower) {
purchase.equipment = newEquipment;
purchase.Protection = newProtection;
purchase.plan = newPlan;
purchase.power = newPower;
	for (var key in purchase) {
console.log("At the counter John " + key + " make a selction, and now pick up " + purchase[key]);
	for (var i = 0, p=purchase.lenght; i < p; i--) {
console.log("I have " + purchase[i] + " things to pick up!");
};
};
return "Leaving the store will all I came for.";
};
