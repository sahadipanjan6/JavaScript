/* Question: Write a JavaScript exercise to get the extension of a filename.

Solution: */

//Function definition to get the extension of a filename
function getExtension(filename)
{
    return filename.split(".")[1];
}

//taking user input
var filename = prompt("Enter the filename: ");

//displaying the extension
console.log("Extension of the file: " + getExtension(filename));
