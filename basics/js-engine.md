A JavaScript engine is a program or an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter, or just-in-time compiler that compiles JavaScript to bytecode in some form.

## how the engine works

JavaScript runs on a variety of devices- a phone, laptop, tv and even IoT devices. The resources available to a JavaScript engine can vary a lot.
A JavaScript engines performs the following tasks:
    1- Compiler optimization
    2- Garbage collection
    3- Hot code management
    4- Caching
    5- Other runtime aspects of the program.

Whenever any device loads JS, it loads, parses and then executes the js code inside the script. The execution of the JS code is handled by the Javascript Engine. Javascript code is parsed into an Abstract Syntax Tree (AST) before handing over to compiler toolchain. Insider compiler toolchain, 1 or more optimizing compilers produce efficient low-level code.

The AST is created so that we can feed it into the first phase of execution which is the interpreter.

The interpreter in v8 is called Ignition. The interpreter generates the byte-code. This is good for code that only needed to run only once. The byte-code runs inside the JavaScript engine itself. Interpreted code is falser to get something running but is a bit slower.

Sometimes, code is repeated often. The JavaScript compilers run feedback and collect profiling data for the code being executed. If it comes across the function that is being called with the same type of parameters every time and has been called multiple times, this code goes through optimizing compiler. The optimizing compiler produces highly optimized machine-level code which runs directly on the CPU for the hot code. Optimizing compiler only kicks in when JS engine detects a code to be hot. A code is hot when it runs quite often, runs inside a loop, etc. The compiled code has direct CPU instructions and is quite faster. It takes a bit of time to produce machine code. The exact CPU instructions are produced as per machine, infra. Optimizing compiler in V8 is Turbo-fan.

## Optimizations made by JS engine

    -Optimizations using Object shape
        JavaScript engines implement the JS object model and they use them to speed of accessing properties of JS objects. When any object is created, a lot of information about the object is stored about the object in the memory. Information like whether the object is writable, enumerable, configurable etc. are stored corresponding to an object. It will be a waste of memory to store this redundant information about the objects of the same type again and again. Hence, these pieces of information are stored separately and the object stores only value. This helps in optimizing the memory a lot.

    -Inline Caching
        The main motivation behind shapes is the concept of Inline Caches or ICs. ICs are the key ingredient to making JavaScript run fast! JavaScript engines use ICs to memorize information on where to find properties on objects, to reduce the number of expensive lookups.