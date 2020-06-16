/* Question: Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 
return double the absolute difference.

Solution: */

var number = parseInt(prompt("Enter a number: "));
var diff = Math.abs(number - 13);

//checking the condition
if(diff > 13)
    console.log("Output: " + (diff*diff));
    
else
    console.log("Output: " + diff);
