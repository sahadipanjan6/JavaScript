/* Question:  Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their 
sum is 50.

Solution: */

//getting the user inputs
var number1 = parseInt(prompt("Enter number1: "));
var number2 = parseInt(prompt("Enter number2: "));

//checking the conditions
var sum = number1 + number2;
if(number1==50 || number2==50 || sum==50)
    console.log("True");
else
    console.log("False");
