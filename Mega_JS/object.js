// // //Object:- It is an important non-primitive datatype in Javascript. Objects are special data structure that can hold values in well ordered manner. It can as well hold other complex entities. Objects hold data in key - value pair.
// // //Syntax: variableType identifier = {key:value, key2:value2, ....,keyN, valueN}

// // //example object:

// // const Person = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     gender:"M",
// //     address:{
// //         temporary:{
// //             street:"Koteshwor-32",
// //             city:"KTM",
// //             Province:'Bagmati',
// //             country:'Nepal'
// //         },
// //         permanent:{
// //             street:"Bhadrapur-06",
// //             city:"Jhapa",
// //             Province:'1',
// //             country:'Nepal'
// //         }
// //     },
// //     isMarried: false,
// //     birthYear: 1998,
// //     age: (currentYear) => currentYear - Person.birthYear
// // }

// // //here, firstName is property and age is method.
// // //John Doe is x years old and He is not married.

// // console.log(`${Person.firstName} ${Person.lastName} is ${Person.age(2024)} years old and ${Person.gender === 'M' ?'He':'She'} is ${Person.isMarried?'':'not'} married`)

// // //Accessing values from an object:
// // //There are two ways to access value from an object.
// // //1. Dot Notation
// // console.log(Person.firstName) // "John"

// // //2. Bracket Notation
// // console.log(Person['lastName']) //"Doe"


// // console.log(Person.address.temporary.Province) //"Bagmati"

// // console.log(Person['address']['permanent']['street']) //"Bhadrapur - 06"

// // const Nepal = {
// //     common: "Nepal",
// //     official: "Federal Democratic Republic of Nepal",
// //     nativeName: {
// //         nep: {
// //             official: "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
// //             common: "नेपाल"
// //         }
// //     },
// //     startOfWeek: "sunday",
// //     capitalInfo: {
// //         latlng: [
// //             27.72,
// //             85.32
// //         ]
// //     }

// // }

// // console.log(Nepal.nativeName.nep.common);


// // The latitude of नेपाल संघीय लोकतान्त्रिक गणतन्त्र is 27.72 and the longitude is 85.32

// // const Nepal ={
// //     name : "नेपाल संघीय लोकतान्त्रिक गणतन्त्र",
// //     latitude:{
// //         ltd : 27.72

// //     },

// //     longitude:{
// //         long: 85.32
// //     }
// // }

// // console.log(`The latitude of ${Nepal.name} is ${Nepal.latitude.ltd} and the longitude is ${Nepal.longitude.long}`);
// // console.log(`The latitude of ${Nepal["name"]} is ${Nepal['latitude']["ltd"]} and the longitude is ${Nepal['longitude']['long']}`);

// const car ={
//     carName : "bugatti chiron",
//    details:[
//     "8.0-liter ",
//     16,
//     1500,
//     1180,
//     "60 mph",
//     2.3
//    ],

//    speed : [
//     262
//    ]

// }

// // console.log(`All ${car['carName']} models are motivated by an ${car['details'][0]} ${car['details'][1]}-cylinder powerplant. This beast of an engine employs four turbochargers to generate a mighty ${car['details'][2]} horsepower and ${car['details'][3]} lb-ft of torque. ${car['carName']} claims that the Chiron makes the dash from zero to ${car['details'][4]} in a mere ${car['details'][5]} seconds, and it has a top speed of ${car['speed'][0]} mph.`);

/**
 * /Object Coding Challenge #1
Create a bank account object of a customer where he/she has his/her firstName, lastName, accountNo., currentBalance
this object should also have method for fund deposit, fund withdrawal and fund Check.

Incase of fund deposit:
Step: add amount that has been deposited with the current balance and show message

Incase of fund withdrawal:
Step1: Check if there's sufficient balance in the account
Step2: If there's sufficient balance then deduct amount from currentBalance and show message.
If there's no sufficient balance just show the message

 */




//Dynamic Object: There are two way to create objects dyanamically in javascript.
//1. Factory Function

/*
const Product = (prdouctName, productPrice, productDesc, countInStock, paymentBool)=>{
    return{
        prdouct_Name: prdouctName,
        product_price: productPrice,
        product_desc: productDesc,
        count_stock: countInStock,
        payment_message:() => paymentBool ? console.log("Payment has been recived"): console.log(`plese make a payment`)

    }
}

const jacket = Product('Adidas Jacket', 7800, 'This is a very  good quality Adidas Jacket', 5, false);

const shirt = Product('deshishirt', 120000, `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla reprehenderit, eum sed est aliquid fugiat perspiciatis fugit nostrum rem consequuntur.`, 2, true);



console.log(jacket);
jacket.payment_message();
*/


//2. Constructor Function

function AddProduct (prdouctName, productPrice, productDesc, countInStock, paymentBool){
    this.product_name = prdouctName,
    this.product_Price = productPrice,
    this.productdesc = productDesc,
    this.count_In_Stock = countInStock,
    this.payment_message = ()=> paymentBool ? console.log("Payment has been recived"): console.log(`plese make a payment`)

    
}

const Shirt = new AddProduct ("Denim Shirt", 2500, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, aliquid?`, 100, false);

console.log(Shirt);
