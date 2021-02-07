/*
Functions, in JavaScript, are essentially objects. Like objects they can be assigned to variables, passed to other functions and returned from functions. And much like objects, they have their own properties. One of these properties is this.
The value that this stores is the current execution context of the JavaScript program.Thus, when used inside a function this‘s value will change depending on how that function is defined, how it is invoked and the default execution context.
*/

//**when was the function invoked */

var sayName = function (name) {
    console.log(`hello ${name}`)
}

//type of this binding 
//1.implicit binding

var me = {
    name: 'anoop kumar',
    age: 26,
    sayName: function () {
        console.log(`name: ${this.name} , age: ${this.age}`)
    }
}

//implicit binding : say this will point to the left of object on which it is called . me
me.sayName();

//for stand alone function , this refer to window object


//new Binding
var Animal = function (color, name, type) {
    //this={}
    this.color = color;
    this.name = name;
    this.type = type
}

var tiger = new Animal('red/black', 'simbha', 'tiger');


//window binding
//stand alone function point to window.and have nothing to its' left.