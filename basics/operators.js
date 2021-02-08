//If you add a number and a string, the result will be a string!

var x = 5 + 5;        //10
var y = "5" + 5;      //55
var z = "Hello" + 5;  //hello5


//typeof	Returns the type of a variable
//instanceof	Returns true if an object is an instance of an object type

console.log(2 - 1 + 4); // getting same precedence move from left to right.

//Coercion and falsy values

//type coercion in javascript is automatic conversion of value from one data type to another
var x = 3;
var y = "3";
x + y // Returns "33" 

var x = 24;
var y = "Hello";
x + y   // Returns "24Hello";

//Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.
var x = 3;
var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type

/**
 * Equality Coercion
 * The ‘ == ‘ operator compares values and not types.
 * var a = 12;
 * var b = "12";
 * a == b // Returns true because both 'a' and 'b' are converted to the same type and then compared. Hence the operands are equal.
 */


//fasly value 
0
null
''
undefined
NaN