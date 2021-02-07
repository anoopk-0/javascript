/*
There are majorly two types of languages. First, one is Statically typed language where each variable and expression type is already known at compile time. Once a variable is declared to be of a certain data type, it cannot hold values of other data types.Example: C, C++, Java.

## Java(Statically typed)
int x = 5  // variable x is of type int and it will not store any other type.
string y = 'abc' // type string and will only accept string values

Other, Dynamically typed languages: These languages can receive different data types over time. For example- Ruby, Python, JavaScript etc.
## Javascript(Dynamically typed)
var x = 5; // can store an integer
var name = 'string'; // can also store a string.

JavaScript is dynamically typed (also called loosely typed) scripting language. That is, in javascript variables can receive different data types over time. Datatypes are basically typed of data that can be used and manipulated in a program.

## The latest ECMAScript(ES6) standard defines seven data types: Out of which six data types are Primitive(predefined).
    Numbers: 5, 6.5, 7 etc.
    String: “Hello GeeksforGeeks” etc.
    Boolean: Represent a logical entity and can have two values: true or false.
    Null: This type has only one value : null.
    Undefined: A variable that has not been assigned a value is undefined.
    Object: It is the most important data-type and forms the building blocks for modern JavaScript.

## Variables in JavaScript:
    Variables in JavaScript are containers which hold reusable data. It is the basic unit of storage in a program.

        -The value stored in a variable can be changed during program execution.
        -A variable is only a name given to a memory location, all the operations done on the variable effects that memory location.
        -In JavaScript, all the variables must be declared before they can be used.

Javascript is also known as untyped language. This means, that once a variable is created in javascript using the keyword var, we can store any type of value in this variable supported by javascript. Below is the example for this:

// creating variable to store a number
var num = 5;

// store string in the variable num
num = "GeeksforGeeks";


After ES2015,we now have two new variable containers : let and const.
    The variable type Let shares lots of similarities with var but unlike var it has scope constraints.
            // let variable
                let x; // undefined
                let name = 'Mukul';

    Const is another variable type assigned to data whose value cannot and will not change throught the script.
         // const variable
            const name = 'Mukul';
            name = 'Mayank'; // will give Assignment to constant variable error.
*/