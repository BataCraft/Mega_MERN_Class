let MarksW = 78
let MarksH = 1.69
let JohnW = 92
let JohnH = 1.95
let BIM1,
BIM2

// clauclate BIM of Jhon andMark
BIM1 = MarksW / MarksH ** 2;
BIM2 = JohnW / JohnH ** 2;

// task1
let BIM = (BIM1 >= BIM2) ? "Mark's BMI is higher than John's!" : "Mark's BMI is higher than John's!"
console.log(BIM);