/* Question: Write a JavaScript program to remove a character at the specified position of a given string and return 
the new string.

Solution: */

//getting user input
var input_string = prompt("Enter any string: ");
var position = parseInt(prompt("Enter the position: "));

var output_string = input_string.replace((input_string.charAt(position)+""), "");
console.log("Output String: " + output_string);
