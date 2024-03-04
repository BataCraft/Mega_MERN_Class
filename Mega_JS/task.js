//Coding Challange
//Here's an array having objects as its elements

// const data = [
//     {id:1, name: 'Ram'},
//     {id:3, name:'Shyam'},
//     {id:2, name:'Hari'},
//     {id:5, name:'Gita'},
//     {id:6, name:'Sita'},
//     {id:4, name:'Harry'},
//     {id:7, name:'Jhon'}
    
// ]


// const oddId = data.filter((e)=>(e.id % 2 != 0)  )
// const evenId = data.filter((e)=>(e.id % 2 == 0) )
// console.log(oddId);
// console.log(evenId);

/*
const products =[
    {id:1, productName: "yellow shirt", productPrict: 900},
    {id:2, productName: "green shirt", productPrict: 200},
    {id:3, productName: "white shirt", productPrict: 9000},
    {id:4, productName: "blue shirt", productPrict: 100},
    {id:5, productName: "black shirt", productPrict: 300},
    {id:6, productName: "skyblue shirt", productPrict: 700},
    {id:7, productName: "red shirt", productPrict: 100}
]

const range = products.filter((e)=>(e.productPrict >= 200 && e.productPrict <= 600))
console.log(range);

*/

/*

const data = [
    {id:1, name: 'Ram'},
    {id:3, name:'Shyam'},
    {id:2, name:'Hari'},
    {id:5, name:'Gita'},
    {id:6, name:'Sita'},
    {id:4, name:'Harry'},
    {id:7, name:'Jhon'}
    
]


const addAddress = data.map ((e)=> {
    return {...e, address: "Kathmandu"}
})
console.log(addAddress);
console.log(data);

*/

//Word = 'MISSISSPPI'

const word = 'MISSISSPPI'
console.log(word.split(""));