//Switch CAse:
// the switch statement is used to perform different actions adctuons based on the value .
// Syntax:
// switch (value)
// {
//     case value1:
//         // statement to be exectued if value1
//         break;
//         case value2:
//             // statement to be executed if value2
//             break;
//------------------
//-------------
//-------------
// case valueN:
//     //statement to be executed if valuN
//     break:
//     default:
//         statement to be executed if no match found for any case above
// // }

// let currentLight = "Red"
// switch(currentLight)
// {
//     case 'Green':{
//         console.log(`GO`);
//     }
//     break;
//     case 'Yellow':{
//         console.log('READY');
//         break;
//     }
//     case 'Red':
//     {
//         console.log('STOP');
//         break;
//     }
//     default:
//         console.log("aafno margi gar");
// }

//WAP using switch case to find GPA
// 90-100 -> A+
// 80-89 -> A
// 70 - 79 -> B+
// 60 -  69 -> B
// 50 - 59 -> C+
// 40 -  49 -> C
// <39 -> F

let totalMarks = 500
let obtainedMarks = 345

let perscentage = (obtainedMarks / totalMarks) * 100

switch(true)
{
    case perscentage >= 90 && perscentage <= 100 :
        {
        console.log(`A+`);
        break;
    }
    case perscentage >= 80 && perscentage <= 89 :
        {
        console.log(`A`);
        break;
    }
    case perscentage  >= 70 && perscentage <= 79 :
        {
        console.log(`B+`);
        break;
    }
    case  perscentage  >= 60 && perscentage <= 69 :
        {
        console.log(`B`);
        break;
    }
    case perscentage  >= 50 && perscentage <= 59 :
        {
        console.log(`C+`);
        break;
    }
    case perscentage  >= 40 && perscentage <= 49:
        {
        console.log(`C`);
        break;
    }
    case    perscentage <= 40 :
        {
        console.log(`C`);
        break;
    }
    default:
        console.log(`Invalid number`);
}
