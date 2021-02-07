/*
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

//The For/In Loop
//The JavaScript for/in statement loops through the properties of an object:
var person = { fname: "John", lname: "Doe", age: 25 };

var text = "";
var x;
for (x in person) {
    text += person[x];
}


//for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
//The JavaScript for/of statement loops through the values of an iterable objects.

var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
    document.write(x + "<br >");
}
//BMW
//Volvo
//Mini

var txt = "JavaScript";
var x;

for (x of txt) {
    document.write(x + "<br >");
} ///j a v a s c r i p t