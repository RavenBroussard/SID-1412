/*  Raven "Nikki" Broussard
	SDI 1412 Project 4
	December 18, 2014
*/

//  Global Variables

// String Functions
// Problem 1  : Does a string follow a 123-456-7890 like a phone number?



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


// Number Functions
// Problem 6  : Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.


// Problem 7  : Fuzzy-match a number: is the number above or below a number within a certain percent?


// Problem 8  : Find the number of hours or days difference between two dates.

// Problem 9  : Given a string version of a number, such as “42”, return the value as an actual Number data type, such as 42.

// Array Functions
// Problem 10 : Find the smallest value in an array than is greater than a given number.

 
// Problem 11 : Find the total value of just the numbers in an array, even if some of the items are not numbers.

// Problem 12 : Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: “a” + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].

// Outputs

addCaps("i hope this works mr. lewis!")


