//veriables - They are very important concept in every programing language that are used to hold (store) and mainpulate them.
// veriables can store values and expressions.
// Expressions are something that will eventually resolves to a value.
// Variables hold the result of an expression, not the expression itself.


// js is Dynamically Typed Programming Language. 
// syntax:
// variable_type variable_name = value or expression    

// const a = 5;
// var b = 10;
// let c = 4;
// console.log(a, b, c);


// Rules for identifire":
// - Must start with letter, underscore (_), dollar ($) sign, or any other non-reserved word in JavaScript.
// - Can contain letters (both uppercase and lowercase), digits (0-9), hyphens (-), underscores (_), colons (:), periods (.), and tildes (~).
// - Cannot be reserved words in JavaScript.
// - Names must be unique within their scope. If two variables have the same name, only one of them will exist at runtime.
// - Names are case sensitive.
// - Variable names cannot begin with a number.
// - Variable name must be unique within their scope.
let myName = "John";
console.log("myName", myName);
var age = 28;
console.log("age", age);
const city = 'New York';
console.log('city', city);
// Type Inference:
// When we declare variables without explicitly specifying its type, it automatically gets assigned based on the value given to it.
// When we declare variables without specifying its type, it automatically gets inferred by JS based on what we assign to it.
// When we declare a variable without specifying its type, it's inferred from the assigned value.
let num = 39;
num = 'Hello World!';
console.log(typeof num);

