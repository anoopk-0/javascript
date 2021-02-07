/**
The JavaScript interpreter works from left to right.
First 10 + 20 is added because x and y are both numbers.
Then 30 + "30" is concatenated because z is a string.

NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
var x = 100 / "Apple";  // x will be NaN (Not a Number)
var x = 100 / "10";     // x will be 10

typeof NaN;            // returns "number"

toFixed(x) returns a string, with the number written with a specified number of decimals:


important
    Number()	    //Returns a number, converted from its argument.
    parseFloat()	//Parses its argument and returns a floating point number
    parseInt()	    //Parses its argument and returns an integer

parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

Example
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

*/