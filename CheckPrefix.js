/* Question: Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" then return the original string.

Solution: */

//getting the user input
var input_string = prompt("Enter any string: ");

//checking the condition
if(input_string.startsWith("Py"))
    console.log("Output String: " + input_string);
    
else
{
    var output_string = "Py" + input_string;
    console.log("Output String: " + output_string);
}
