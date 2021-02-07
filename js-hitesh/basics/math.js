//Math.round()
//Math.sqrt(x) returns the square root of x:

Math.ceil(4.4);     // returns 5
Math.floor(4.7);    // returns 4
Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10


//function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}