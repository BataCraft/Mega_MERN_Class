// Operators:- They are pere-defined signs and symbol that are designed to perform designated operatoins on operands.
// types of operators:
// 1. Arthemetic Operators:
// +, -, *, /, % (modulus), ** (power)
// ----a. Addition Operator (+),
// ----b. Subtractuion Operator (-),
// ----c. Multiplication Operator (*),
// ----d. Division Operator (/),
// ----e. Modulus Operator (%),
// ----f. Power Operator (**),
// ----g. Concat OPerator(+)

let num1 = 5
let num2 = 7
// let num3 = num1 + num2
console.log(`The sum of ${num1} + ${num2} is ${num1 + num2} `);

// Type Coercion Vs Type Conversion
// 1. Type of Conversion 
// ---------Sting,
// --------Number,
// --------Boolen. 
console.log(typeof NaN);

// 2. Comparison (Relational) Operators,
//-------------> operator: Comparison operator is used to compare two operands, It returns true  or false based on the comparsion 
//a.  Greater than (>)
//b.  Less than (<)
//c.  Greater than or equal to (>=)
//d. less than equalto (<=)
//e. Equal to (==)
//f. Not equal to (!=)
//g. strict equalto (===)

//
// 3. Assignment Operatos, -----> This operators is used to assign the value to a variable...
//---- = -> assigns the value in variable
//---- += -> adds the value to the variable
//---- -= -> subtracts the value from the variable
//---- *= -> multiplies the value with the variable
//---- /= -> divides the value with the variable
//---- %= -> modulus the value with the variable

// 4. Logical Operators,
//a. AND Operator (&&) -----> it combains two or more boolens values and  expression and returns true if at  all of them are true and false if all of them are false.
console.log(9 >=10 && 5>=5 && 3>10);

//b. OR Operator (||) -----> it combains two or more boolens values and  expression and returns true if at least one of them are true and false if all of them are false.
console.log(9 >=10 || 5>=5 || 3>10);

//c. NOT Operator (!) -----> it is a unary logical operaotor that inverts the boolean value or expresions.

// console.log(9 >=7 || 5>=5 || 3>10);

// 5. Special Operatos.
//a. Ternery Operators: it is a short hand operator used instead of IF-Elase satement.
// Syntax:
// if conditon ? runs if condition is true : runs if the condition is false
// Example
var age = 15
age >= 18 ? console.log("you are eligible to vote") : console.log("you can't vote")

//Example 2:
let message = age > 18 ? " you can enter the club" : "you can't enter the club"
// console.log(message);

//Nested Ternery Operators
//Syntax: condition ? condition ? "True statement" : "false statement " : "statement if initial condtion is false"
age > 18 ? isFemale ? "can get free drink" : ' can enter but NO FREE Drink' : " can't enter the club"

//Nullish Coelscing Operators: If LHS value or expression is null or undefined, the RHS will be executed.

let username = 0;
// username ?? ("Plese enter your username")  (`welcome ${username}`)


//c. Unary Operator: Those operators which can carry out operator on single operands are called unary operators.
//i. Increament Operators (++) : increment the value by 1
//ii. Decrement Operator (--) : Decrement the value by 1
//iii. Unary +
let x = 5
console.log(+x);

//iv. Unary - or Negation Operator
let y = 5
console.log(-y);


//v. typeof Operator
