//Var

/**
 * var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
 * var variables can be re-declared and updated
 */
var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello); // error: hello is not defined

//Hoisting of var

//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

console.log(greeter);
var greeter = "say hello"

//it is interpreted as this:
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"

/**
  There's a weakness that comes with  var. I'll use the example below to explain:

    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead";
    }

    console.log(greeter) // "say Hello instead"

So, since times > 3 returns true, greeter is redefined  to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary.
 */


/**--------------------------LET----------------------------------------------------- */
/*
    -let is block scoped
        A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
        So a variable declared in a block with let  is only available for use within that block.

    -let can be updated but not re-declared.
         let greeting = "say Hi";
         let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

*/

let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined

/**
Hoisting of let
Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
 */



/**--------------------------CONST----------------------------------------------------- */

/**
 * const declarations are block scoped.
 * const cannot be updated or re-declared
 *      -While a const object cannot be updated, the properties of this objects can be updated.
 * Just like let, const declarations are hoisted to the top but are not initialized.
 */