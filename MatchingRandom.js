/* Question: Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then 
prompted to input a guess number. If the user input matches with guess number, the program will display a message "Matched" 
otherwise display a message "Not matched".

Solution: */

//Function definition to generate a random number within a range
function generateRandomNumber(upperbound)
{
    return Math.random() % upperbound;
}

//taking input from the user
var number = parseInt(prompt("Enter any integer: "));

//taking the upperbound from the user
var high = parseInt(prompt("Enter the upperbound of the range: "));

//checking the condition and deciding
if(number == generateRandomNumber(high))
    console.log("Matched...");
    
else
    console.log("Not matched...");
