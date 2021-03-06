/*  Raven "Nikki" Broussard
	SDI 1412 Project 4
	December 18, 2014
*/

//  Global Variables
var myLibrary = function() {

// String Functions
// Problem 1  : Does a string follow a 123-456-7890 like a phone number?

var checkPhoneNumber = function(phoneNumber) {

var start = phoneNumber.indexOf("-");
var end = phoneNumber.lastIndexOf("-"); 
var firstSet = phoneNumber.substring(0, start);
var secondSet = phoneNumber.substring(4, end);
var thirdSet = phoneNumber.substring(8, 12);
var numberCheck = firstSet + "-" + secondSet + "-" + + thirdSet;

	if(phoneNumber === numberCheck) {
	return true;
}	else {
	return false;
}
};


// Problem 2  : Does a string follow an aaa@bbb.ccc pattern like an email address?


// Problem 3  : Is the string a URL (Does it start with http:// or https://)?


// Problem 4  : Title-case a string (split into words, then uppercase the first letter of each word).

function addCaps(changeCase) {
	String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function (words) {
		return words.charAt(0).toUpperCase() + words.substr(1).toLowerCase();
		});
	};
		changeCase.toProperCase();
		console.log(changeCase.toProperCase());
}

// Problem 5  : Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: “a,b,c” + “,” + “/” --> “a/b/c”.

var separatorChange = function(items, sepItems1, sepItems2) {

var message = "";
var sepArray = items.split(sepItems1);
var i = 0;

while(i < sepArray.length) {

var newChange = sepArray[i];
i++;
message += newChange + sepItems2;
}
return message;
}
// Number Functions
// Problem 6  : Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.

var fixedDecimal = function(place) {
	var decimalPlace = place.toFixed(3);
	return decimalPlace;
}

// Problem 7  : Fuzzy-match a number: is the number above or below a number within a certain percent?


// Problem 8  : Find the number of hours or days difference between two dates.

var timePasted = function (startDate, endDate) {

	var fullDay = 1000 * 60 * 60 * 24; 
	var start = new Date(startDate);
	var end = new Date(endDate);
	var comp = Math.ceil((end - start) / fullDay);
	return comp;
};
// Problem 9  : Given a string version of a number, such as “42”, return the value as an actual Number data type, such as 42.

var changeType = function(change){
	var stringNumber = parseInt(change);
	return stringNumber;
}
// Array Functions
// Problem 10 : Find the smallest value in an array than is greater than a given number.

 
// Problem 11 : Find the total value of just the numbers in an array, even if some of the items are not numbers.

// Problem 12 : Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: “a” + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].

//  Returns
	
	return {
		"checkPhoneNumber" : checkPhoneNumber,
		"addCaps" : addCaps,
		"separatorChange" : separatorChange,
		"fixedDecimal" : fixedDecimal,
		"timePasted" : timePasted,
		"changeType" : changeType,

	}
}
//  Inputs

var input = new myLibrary();

// Outputs

console.log(input.checkPhoneNumber("123-456-7890"));
console.log(input.addCaps("i hope this works mr. lewis!"));
console.log(input.separatorChange("a,b,c", ",", "/"));
console.log(input.fixedDecimal(980.736485));
console.log(input.timePasted("November 23, 2014", "December 18, 2014") + " days since we started SDI.");
console.log(input.changeType("42"));