//while Loop: It is the tyope of loop that is used when the number of itterations are unknown beforehand.
//Syntax:
/*
while (condition) {
    code block to be executed;
    }
    */
//Example:
let i = 0
while (i <= 20)
{
    // i % 2 === 0 && console.log(`${i} odd`);
    // console.log(i);
    console.log((i % 2 === 0) ? (`${i} was divisibale by 2`) : (`${i} wasn't divisible by 2`));
    i++
}
