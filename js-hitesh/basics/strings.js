//property


//length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;

//he indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string, 
//accept a second parameter as the starting position for the search:
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 1); //21


/**
The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).


There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 

The slice() Method
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position.If a parameter is negative, the position is counted from the end of the string.If you omit the second parameter, the method will slice out the rest of the string:

The substring() Method
substring() is similar to slice().
The difference is that substring() cannot accept negative indexes.

The substr() Method
The difference is that the second parameter specifies the length of the extracted part.If the first parameter is negative, the position counts from the end of the string.

*/

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6); //Banana

/*
The charAt() Method
The charAt() method returns the character at a specified index (position) in a string:


A string can be converted to an array with the split() method:
*/
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe