//JavaScript arrays are used to store multiple values in a single variable.

//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

let x = []
Array.isArray(x) // true 
typeof x // object


//2 soln
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}

//3 rd
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits instanceof Array;   // returns true

//Methods
//The join() method also joins all array elements into a string.
//Popping items out of an array, or pushing items into an array.
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
//Using delete may leave undefined holes in the array. Use pop() or shift() instead.


//The splice() method can be used to add new items to an array:
/*
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:

*/


//The slice() method creates a new array. It does not remove any elements from the source array.


//The sort() method sorts an array alphabetically:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits

//numeric sort
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b }); //1,5,10,25,40,100

var cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

function myFunction() {
    cars.sort(function (a, b) {
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
}

//JavaScript Array Iteration Methods

/**
 * ForEach vs Map
 * The first difference between map() and forEach() is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.
*/
const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.forEach(x => x * x)
//>>>>>>>>>>>>>return value: undefined

myAwesomeArray.map(x => x * x)
//>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]

/*
 * The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.
 */


const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.forEach(x => x * x).reduce((total, value) => total + value)
//>>>>>>>>>>>>> Uncaught TypeError: Cannot read property 'reduce' of undefined
myAwesomeArray.map(x => x * x).reduce((total, value) => total + value)
//>>>>>>>>>>>>>return value: 55

/*
In general, the word "mutate" means change, alternate, modify or transform. And in the JavaScript world it has the same meaning.
forEach() does not mutate the array on which it is called. (However, callback may do so).

map() does not mutate the array on which it is called (although callback, if invoked, may do so).

The map() method returns an entirely new array with transformed elements and the same amount of data. In the case of forEach(), even if it returns undefined, it will mutate the original array with the callback.

Therefore, we see clearly that map() relies on immutability and forEach() is a mutator method.



As always, the choice between map() and forEach() will depend on your use case. If you plan to change, alternate, or use the data, you should pick map(), because it returns a new array with the transformed data.

But, if you won't need the returned array, don't use map() - instead use forEach() or even a for loop.
*/



const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.map((value, index, array) => {
    console.log(value)
    console.log(index)
    console.log(array)
})


//The filter() method creates a new array with array elements that passes a test.

//Array.reduce()
//The reduce() method runs a function on each array element to produce (reduce it to) a single value.

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}


//Array.every() :The every() method check if all array values pass a test.

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

//return boolean 

//The some() method check if some array values pass a test.

//Array.find() & findIndex()