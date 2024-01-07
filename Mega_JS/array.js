// Array: It is a non-Primitive data type. It was a special type of object in jasascript that is used to store multiple similar valued data in a single variabnle. 

//example:
//array of fruits
let fruits = [ 'apple', 'banana', 'cherry', 'gava', 'watermelin']
// arry of years
let years = [ 2015, 1016, 2017, 2018, 2019]
// mixed array
let mixedArray = [ 'hello', 10, true, undefined, null, Symbol(2), 200n, fruits, {a:1, b:2}]


// The data present inside an array are called "elements", and each element has its own "index".
// The index of array always starts from 0. It means 1st element is represented by 0 index, second element is represented by 1 index and so on. 

// In Javascript, arrays can be created using
// Array Literals
// It us the most common/ used way to create an array/
// variable Type indingifer = [ el1, el2, el3, el4..........elN]
// Array Constructor
//  Sincem array is an special objecy in javascript, it can be created using its constructor
// Example
let brands = new Array('Adidas', 'Nike', ' Gucci', 'Dior', 'GoldStar')
// console.log(brands);
// console.log(typeof(fruits[0]));
// console.log(fruits[1]);
// console.log(fruits[5]);
// console.log(fruits[6]);

//adding elements in an array using index
let cities = []
cities[0] = 'New York'
cities [1] = 'KTM'
cities [2] = 'BTK'
// 3 Array holes are formed
cities [6] = 'LTP'
// console.log(cities);


// Array is special in-built object in javascript. so it has many special methods as well.

//It is one special property

//.length -> it returns length of an array

// console.log(cities.length);

//Methods:
// Methods are functions defined in an object 
// Array methods: 