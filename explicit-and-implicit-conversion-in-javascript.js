/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);
// Although this will spit out the correct number it is better to convert the string to a number in case of other operations.

let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}
// I dont know what this is supposed to do, if the goal is to make it not work then you can't use explicit conversion to make a string false. so instead i removed the quotations.

let age = "25";
let num = Number(age)
let totalAge = num + 5;
console.log("Total Age: " + totalAge);
// this works because age is converted from a string to a number before they are added.

let length = "6.5 inches";
console.log(parseFloat(length));
// explicit type conversion

if ("valid"){
  console.log("This is valid!")
};

// implicit type conversion