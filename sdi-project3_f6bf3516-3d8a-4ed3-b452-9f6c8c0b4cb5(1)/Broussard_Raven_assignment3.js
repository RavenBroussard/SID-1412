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

