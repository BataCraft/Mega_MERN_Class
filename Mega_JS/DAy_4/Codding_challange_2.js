let MarksW = 78
let MarksH = 1.69
let JohnW = 92
let JohnH = 1.95
let BIM1,
BIM2

// clauclate BIM of Jhon andMark
BIM1 = MarksW / MarksH ** 2;
BIM2 = JohnW / JohnH ** 2;


let BIM = (BIM1 >= BIM2) ? `${markBmi}Mark's BMI is higher than John's!` : `${johnBmi}jhons's BMI is higher than mark's!`
console.log(BIM);