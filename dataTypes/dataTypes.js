
/*A function to return one of the following 
 		For strings, return its length.
		For null or undefined return string 'no value'
		For booleans return the boolean
		For numbers return a string showing how it compares to hundred e.g. For 67 return 'less than 100' for 4034 return 'more than 100' or equal to 100 as the case may be
		For arrays return the 3rd index, or undefined if it doesn't exist.
		For functions call the function and pass in true as an argument and return it.*/
'use strict'

var pass = {}
pass.dataTypes = function(data) {

	if (typeof data == "undefined" || data == null) {

		return 'no value';

	} else if (typeof data == "string") {

		return data.length;

	} else if (typeof data == "boolean") {

		return data;

	} else if (typeof data == "number") {

		if (data <100) {

			return 'less than 100';

		} else if (data > 100) {

			return 'more than 100' ;

		} else {

			return 'equal to 100';
		}

	} else if (typeof data == "function") {

		return data(true);

	} else if (Array.isArray(data) ) {

		if (data.length<3) {

			return undefined;

		} else {

			return data[2];
		}

	} else {
		return "unknown datatype";

	}
}
	
module.exports = pass;