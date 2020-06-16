/* Question: Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

Solution: */

// Finding the area of a triangle whose 3 sides are given
var side1 = parseInt(prompt("Enter side1: "));
var side2 = parseInt(prompt("Enter side2: "));
var side3 = parseInt(prompt("Enter side3: "));

//calculating the semi-perimeter
var s = (side1 + side2 + side3)/2;
console.log("Semi-Perimeter: " + s);
var diff1 = Math.abs(s-side1);
var diff2 = Math.abs(s-side2);
var diff3 = Math.abs(s-side3);
var area = Math.sqrt(s*diff1*diff2*diff3);

//displaying the area
console.log("Area of Triangle: " + area);
