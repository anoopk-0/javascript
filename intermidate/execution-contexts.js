//Execution context (EC) is defined as the environment in which the JavaScript code is executed. By environment, I mean the value of this, variables, objects, and functions JavaScript code has access to at a particular time.

/**
Execution context in JavaScript is of three types as:

EACH EXECUTION CONTEXT HAS 2 PHASES
            CREATING PHASE
            EXECUTION PHASE

Global execution context (GEC): This is the default execution context in which JS code start its execution when the file first loads in the browser. All of the global code i.e. code which is not inside any function or object is executed inside the global execution context. GEC cannot be more than one because only one global environment is possible for JS code execution as the JS engine is single threaded.
        has 2 things :
                this: window
                window: global object


        IN THE CREATION PHASE OF GEC : 4 things happens
            we create global object , create object called this, allot memory space for variable and function and assign then the default values.

*/

var name = 'anoop';
var handle = '@gamil.com';

function getName() {
    return {
        name: name,
        handle: handle
    }
}

/**
Global Execution Context

Phase: Creation
        window: global object
        this: window
        name: undefined
        handle: undefined
        getName: fn()

next step is

phase : execution
        here the js engine execute the code line by line

        window: global object
        this: window
        name: undefined
        handle: undefined
        getName: fn()

 */


/*
Functional execution context (FEC): Functional execution context is defined as the context created by the JS engine whenever it finds any function call. Each function has its own execution context. It can be more than one. Functional execution context has access to all the code of the global execution context though vice versa is not applicable. While executing the global execution context code, if JS engine finds a function call, it creates a new functional execution context for that function. In the browser context, if the code is executing in strict mode value of this is undefined else it is window object in the function execution context.

functionA Execution Context
    Phase: Creation
        arguments: { length: 0 }
        this: window
        functionB: fn()
 */

/*
Execution context stack (ECS): Execution context stack is a stack data structure, i.e. last in first out data structure, to store all the execution stacks created during the life cycle of the script. Global execution context is present by default in execution context stack and it is at the bottom of the stack. While executing the global execution context code, if JS engines find a function call, it creates a functional execution context for that function and pushes it on top of the execution context stack. JS engine executes the function whose execution context is at the top of the execution context stack. Once all the code of the function is executed, JS engines pop out that function’s execution context and start’s executing the function which is below it.

*/