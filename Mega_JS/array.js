// // // // // Array: It is a non-Primitive data type. It was a special type of object in jasascript that is used to store multiple similar valued data in a single variabnle. 

// // // // //example:
// // // // //array of fruits
// // // // let fruits = [ 'apple', 'banana', 'cherry', 'gava', 'watermelin']
// // // // // arry of years
// // // // let years = [ 2015, 1016, 2017, 2018, 2019]
// // // // // mixed array
// // // // let mixedArray = [ 'hello', 10, true, undefined, null, Symbol(2), 200n, fruits, {a:1, b:2}]


// // // // // The data present inside an array are called "elements", and each element has its own "index".
// // // // // The index of array always starts from 0. It means 1st element is represented by 0 index, second element is represented by 1 index and so on. 

// // // // // In Javascript, arrays can be created using
// // // // // Array Literals
// // // // // It us the most common/ used way to create an array/
// // // // // variable Type indingifer = [ el1, el2, el3, el4..........elN]
// // // // // Array Constructor
// // // // //  Sincem array is an special objecy in javascript, it can be created using its constructor
// // // // // Example
// // // // let brands = new Array('Adidas', 'Nike', ' Gucci', 'Dior', 'GoldStar')
// // // // // console.log(brands);
// // // // // console.log(typeof(fruits[0]));
// // // // // console.log(fruits[1]);
// // // // // console.log(fruits[5]);
// // // // // console.log(fruits[6]);

// // // // //adding elements in an array using index
// // // // let cities = []
// // // // cities[0] = 'New York'
// // // // cities [1] = 'KTM'
// // // // cities [2] = 'BTK'
// // // // // 3 Array holes are formed
// // // // cities [6] = 'LTP'
// // // // // console.log(cities);


// // // // // Array is special in-built object in javascript. so it has many special methods as well.

// // // // //It is one special property

// // // // //.length -> it returns length of an array

// // // // // console.log(cities.length);

// // // // //Methods:
// // // // // Methods are functions defined in an object 
// // // // // Array methods: 
// // // // // //.indexOf() -> it returns index of the element passed as an argument. If element doesn't exist it returns -1.
// // // // // console.log(fruits.indexOf('apple'));
// // // // // console.log(fruits.indexOf('onion'));

// // // // // // .includes() -> It checks the existence of element in the array and returns bollean value
// // // // // console.log(fruits.includes('banana')); // true or false
// // // // // console.log(fruits.includes('ornage')); // true or false

// // // // //ARRAYS THAT MUTATES THE ORIGINAL ARRAY.
// // // // // .push() -> adds one or more elemnts to the end of the array


// // // // let checkReturnsValueOFPUsh = fruits.push('grape', 'pomegranate', 'kiwi')
// // // // console.log(fruits);
// // // // console.log(checkReturnsValueOFPUsh);

// // // // //.pop() ->remove one or more elements to the end of the array
// // // // let removedElementUsingPop= brands.pop();
// // // // console.log(removedElementUsingPop)
// // // // console.log(brands);


// // // // let removedElementUsingShift = brands.shift();
// // // // console.log(removedUsingShift);
// // // // console.log(brands);

// // // // // unshift()
// // // // brands.unshift('New Brand 1', 'New Brand 2');
// // // // console.log(brands);

// // // // //Splice () - used to change the existing array, can be used to add/delete/update elements in array
// // // // // Syntax : arr.splice(startIndex ,howManyElementsToBeRemoved , item1 ,item 2 .....)
// // // // /* let indexOfBrand3 = brands.indexOf('Brand 3');
// // // // console.log(indexOfBrand3 + " is the position of brand 3");
// // // // brands.splice(indexOfBrand3+2,0,'Brand New 4','Brand New 5'); */

// // // //Removig elements using splice


// // // let fruits = ['apple', 'banana', 'watermellon',  'orange'];
// // // fruits.splice (2, 1)
// // // // console.log(fruits);

// // // // replacing
// // // let returnValue = fruits.splice (1, 0, 'Grapes', 'kiwi')

// // // console.log(returnValue);

// // // // Reverse
// // // let fruits = ['apple', 'banana', 'watermellon',  'orange'];
// // // let retrnValue = fruits.reverse()
// // // console.log(retrnValue);

// // let arrayNum = [0.1, 5, 22, 6, 3, 7, 100, 9, 8]
// // arrayNum.sort()
// // // console.log(arrayNum)


// // //Disanding order short in array?
// // // const sortedArray = arrayNum.sort().reverse()
// // // console.log(sortedArray);

// // //TO solve this problem /issue .sort() method takes a callback function (specially called compare functiojn) as its agrument.
// // let output = arrayNum.sort((a, b) => b - a)

// // console.log(output);




// // // Checking ASSI key
// // // let str = "Guava"
// // // let str2 = "apple"
// // // console.log(str.charCodeAt(0));
// // // console.log(typeof str.charCodeAt(0))



// //Create an function that takes an array and returns  it elements 
// // function myarry( a) 
// // {
// //     a.reverse()
// //     for(i = 0; i<a.length; i++)
// //     {
// //         console.log(a[i]);
// //     }
// // }

// // myarry([7, 8, 9, 1, 0])

// // Create a function that takes an array and return last element of that array

// // let My_arr = (b) => {
// //     for(i = 0; i < b.length; i++)
// //     {
// //         if(i == b.length-1){
// //                 return b[i]
// //         }
// //     }
// // }
// // console.log(My_arr([1,8,2,4]));
// // console.log(My_arr(['hello', 'World']));


// // Method that does not changes the original array
// // 1. Slice() --> This method is use to take a portion of an array. It Does't multates the original array rawther it creates a shallow copy of it.

// // let fruits = ['apple', 'banana', 'watermellon',  'orange', 'papaya'];
// // console.log(fruits.splice(1, 3)); 

// //2. .concat() --> this mthod is used fo join two arrays.
// // let a = [1, 2, 3, 4]
// // let b = [1, 2, 3, 4]

// // console.log(a.concat(b));
// // console.log(`original array: ${a}`);
// // console.log(`original array: ${b}`);


// // 3. spread operator (...) --> thos operator is used to copy elements of one array to the another array.

// // let toys = ['ball',  'robot', 'doll'];
// // let hobbies = ['reading', 'gaming', 'coding'];
// // let arryMedeUsingSpreadOPerator = [...toys, ...hobbies]
// // // console.log(arryMedeUsingSpreadOPerator);
// // // console.log(`${toys}`);
// // // console.log(`${hobbies}`);

// // let arr = [0, 1 [2, 3]]
// // let x = [...arr, ...toys, 100, 200]
// // console.log(x);



// // Map Filter
// // Most Important topic
//     // MAP -> This method is used to change the value of each element present in the array. This method doesn't mutates the original array. This methods returns  a new array.
//     // This method has a call back function with three arguments and that callback function ha tree pareameters/

//     // 1st -> Element
//     // 2nd -> index of the Element
//     // 3rd -> Array itself

// /*Syntax: array.map((e, i, arr)=>{

// }) */
// // Example

// // let nums = [1, 2, 3, 4, 5, 6]
// // let doubleNums = nums.map((e) => {
// //     return e * 2
// // })
// // console.log(doubleNums);
// // console.log(nums);


// // [0, 2, 6, 12, 20, 30]
// /*
// let nums = [1 , 2, 3, 4, 5, 6]
// let Map = nums.map((e, i) => {
//     return e * i;
    
// })
// console.log(Map);
// */

// // A Company offerde 15% increment in salary forits employes/

// // let oldSalary = [ 1700, 25000, 35000, 50000, 23000, 455000, 99990, 29290]
// // let per = 1.15
// // let newSalary2080 = oldSalary.map((e) =>{
// //     return e * per
    

// // })
// // console.log(newSalary2080);


// // let students = ['Sandip', 'Pushnshuk', 'Tara', 'Rahul', 'Parachanda', 'Kushal', 'Aayush', 'Yujan', 'Ishant', 'Ankit']
// // let Sorting = (students.sort().map((e, i)=> `Roll No. :  ${i + 1} ${e}`))
// // console.log(Sorting);

// // let myFunction = (student) =>{
// //     let sorting = (student.sort().map((e, i)=> `Roll No.: ${i + 1} ${e}`))
// //     return sorting
// // }
// // sorting(['Sandip', 'Pushnshuk', 'Tara', 'Rahul', 'Parachanda', 'Kushal', 'Aayush', 'Yujan', 'Ishant', 'Ankit'])


// // Ktm TEmperature (deg Celius) this week has been

// // let ktmTempInCel = [ 17, 10, 3, 5, 23, 10, 12]

// // // Convert this temp in Fahernheit

// // let Convert = ktmTempInCel.map((e) => `${e * (9 / 5) + 32} `) 
// // console.log(Convert);


// // Filter method:
// // --> This is an array method that is used to fileter individeual elements from an array.This method also returns a new array.
// // Syntax:
// // array.filer((element, index, arr) => {return condtition;});
// //In The callback function of this kmethod a condition is initialized and base on the condition the elements are added (filetered) in the new array returned by this methd.
// //  if the condition is true element is added and if the condition is flase the emelenet won't be added.

// //Example:

// let numbers = [10, 4, 38, 8723, 6, 10, 0, 1, 2, 100]
// let fileter = numbers.filter((e, i, arry) =>{
//     return  e % 2 === 1
    
// })

// console.log(fileter);


// let num = [10, 4, 38, 8723, 6, 10, 0, 1, 2, 100]
// let index  = num.filter((e, i, arry) =>{
//     return  i % 2 === 0

// })

// console.log(index);


