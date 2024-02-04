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
// //.indexOf() -> it returns index of the element passed as an argument. If element doesn't exist it returns -1.
// console.log(fruits.indexOf('apple'));
// console.log(fruits.indexOf('onion'));

// // .includes() -> It checks the existence of element in the array and returns bollean value
// console.log(fruits.includes('banana')); // true or false
// console.log(fruits.includes('ornage')); // true or false

//ARRAYS THAT MUTATES THE ORIGINAL ARRAY.
// .push() -> adds one or more elemnts to the end of the array


let checkReturnsValueOFPUsh = fruits.push('grape', 'pomegranate', 'kiwi')
console.log(fruits);
console.log(checkReturnsValueOFPUsh);

//.pop() ->remove one or more elements to the end of the array
let removedElementUsingPop= brands.pop();
console.log(removedElementUsingPop)
console.log(brands);


let removedElementUsingShift = brands.shift();
console.log(removedUsingShift);
console.log(brands);

// unshift()
brands.unshift('New Brand 1', 'New Brand 2');
console.log(brands);