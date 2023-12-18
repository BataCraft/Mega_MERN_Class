let markMass = 95
let markHeight = 1.88
let johnMass = 85
let johnHeight = 1.76

// Calculate BMI for Mark and John
let markBmi = markMass / (markHeight * markHeight)
let johnBmi = johnMass / (johnHeight * johnHeight)
let markHigherBMI = markBmi > johnBmi
// // Determine whether Mark or John has a higher BMI, using if-else statements
// if (markBmi >= johnBmi)
// {
//     markHigherBMI = true
//     console.log(markHigherBMI);
// }

// else{
//     markHigherBMI = false
//     console.log(markHigherBMI);
// }

console.log(markHigherBMI);
