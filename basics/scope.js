/*
Scope of a variable is the part of the program from where the variable may directly be accessible.

In JavaScript, there are two types of scopes:
    Global Scope – Scope outside the outermost function attached to Window.
    Local Scope – Inside the function being executed.
*/

let globalLet = "This is a global variable";

function fun() {
    let localLet = "This is a local variable";

    console.log(globalLet); // This is a global variable 
    console.log(localLet); // This is a local variable 
}
fun();

/*
Word of caution: Whenever you are declaring variables, always use the prefix let/var/const. If you don’t use the let keyword, then the variables are by default created in the global scope. For instance, in the above example, let’s just remove the keyword let before the declaration of localLet.
*/

let globalLet = "This is a global variable";

function fun() {
    localLet = "This is a local variable";
}

fun();
console.log(globalLet); // This is a global variable 
console.log(localLet); // This is a local variable 

//All the global variables are attached to window object and thus we can access the global variable name as shown in example below.

let globalLet = "This is a global variable";

function fun() {
    let globalLet = "This is a local variable";
    console.log(window.globalLet); // This is a global variable 
}
fun(); 