// // There are 7 falsy values in js. they are 0, -0, 0n, false, undefined, null, NaN, ""
// // Expect these values all the values in js are Truthly value.
// // if (0)
// // {
// //     console.log("value is truthly value");
// // }
// //     else{
// //         console.log("value  is falsly value");
// //     }


// // Short Circuiting using logical Operators: It is the practic to write code to get required result based on behavior shown  by logical operators.
// // KISS,


// // Using AND Operators:
// let age = 20;
// // if (age >= 18)
// // {
// //     console.log(`Your are elligible for Voting`);
// // }
// // else{
// //     // Do noting()
// // }

// // age >= 18 && console.log('Go Voting in mangshir 29');

// // Using OR Operators:
let firstName = 'Ram'
let lastName = 'Thapa'
let username = null

// // Displaying user name on Screen
// // if (username)
// // {
// //     console.log(`Welcome ${username}`);
// // }
// // else{
// //     console.log(`Welcome ${firstName}${lastName}${Date.now()}`);
// // }
// username = username || `${firstName}${lastName}${Date.now()}`
// console.log(`Welcome ${username}`);


// Guard Clasue using NOT operator
// if (!username)
// {
//     username = prompt ('please enter your username')
// }
// document.write(`Welcome ${username}`)

//WAP to check whether  Nepal Mega BCA is  opened or Closed.
// Condition: 
/*
    College time: 10 to 17 (While Definig variable for it keep time in 24 hrs format for simplicity)
    College is closed on weekend
    College is closed on holidays

     */

    // let CollegeTime = 10
    isSaturday = false
    isHoliday = false
    let time = 20;
    // if (time >= 10 && time <=17 && isSaturday=== false && isHoliday===false  )
    // {
    //     console.log(`College is opend`);
    // }
    
    // else{
    //     console.log(`closed`);
    // }
    
if (time >= 10 && time >= 17 || isHoliday || isSaturday)
{
    console.log(`Closed`);
}
else{
    console.log(`open`);
}