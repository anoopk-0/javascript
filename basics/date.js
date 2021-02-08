/*
By default, JavaScript will use the browser's time zone and display a date as a full text string:

Thu Feb 04 2021 22:24:29 GMT+0530 (India Standard Time)

new Date()
new Date() creates a new date object with the current date and time:

new Date(year, month, ...)
new Date(year, month, ...) creates a new date object with a specified date and time.

When you display a date object in HTML, it is automatically converted to a string, with the toString() method.

by default the typeof of data is object.

var d = new Date();
document.getElementById("demo").innerHTML = d.toDateString(); //Thu Feb 04 2021


ISO Date	"2015-03-25" (The International Standard)
The ISO format follows a strict standard in JavaScript.
The other formats are not so well defined and might be browser specific.

UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

When setting a date, without specifying the time zone, JavaScript will use the browser's time zone.
When getting a date, without specifying the time zone, the result is converted to the browser's time zone.
In other words: If a date/time is created in GMT (Greenwich Mean Time), the date/time will be converted to CDT (Central US Daylight Time) if a user browses from central US.


 can use the Date.parse() method to convert it to milliseconds.
*/