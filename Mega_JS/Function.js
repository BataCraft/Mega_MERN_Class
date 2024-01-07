// //There are three types of function
// //1 Function Decleration,
// //2 Function Expression,
// // Syntax
// // Variable type indentifier = function ()
// // {
// //     // Code to be executed
// // }

// // example:
// // var greeting = function (){
// //     console.log("Hello World");
// //     return 1
// // }
// // console.log(greeting());

// // let cakcAge = function (birthDay)
// // {
// //     let thisYear = 2023
// //     const age = thisYear - birthDay
// //     return age
// // }

// let whenWillyou = function (age)
// {

//     let msg = (age > 16) ? (age > 16) ? `you were 16 ${age - 16} years ago}` : `you will be 16 after ${16 - age} yrs`: `You are sweet 16`
//     return msg

// }
// console.log(whenWillyou(20));

// // console.log(cakcAge(2003));
// //3 Arrow Function (ES6)


//Arrow Functions:-
//Syntax : () => {} , () => expression only

//VariableType idendtifier  = () => {}
//KISS Principle -> Keep it sort and simple

// const greeting = () => console.log('Hello World!');
// greeting();

//Create an arrow functuon that returns sum of two numbers

// const sum = (num1, num2) => {
//     return num1 + num2
// }
// console.log(sum(1, 2));

// const sum = (num1, num2) => num1 + num2
// console.log(sum(1, 2));

//Create an arrow function that return an string that says 'You are eligible to vote' or 'you are not eligible to vote' based on passed age via argument,

// const ageFunction = age => age >= 16 ? `you are Eligible to vote` : `you are not eligible to vote`
// console.log(ageFunction(16));


const bmi = (mass, height) => {
    let BMI = mass / (height * height)
    return BMI
}
// console.log(bim(95, 1.88))
console.log(bmi(95, 1.88));