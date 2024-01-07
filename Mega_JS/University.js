//Write a JavaScript to create listed structure of characters.
// const univerSity = () =>{
//     let count = new Array [U, N, I, V, E, R, S, I, T, Y]
//     let output = ''
//     for (let i = 0;  i <= count; i++)
//     {
//         for (let j = 1; j <= i; i++)
//         output += j + ''
//     }
//     console.log(output);
//     output = ''
    
// }
// univerSity();

const Star = ()=>{
    for(let i = 1; i<=5; i++)
    {
        for (let j = 1; j<=i; j++)
        {
            console.log(`*`);
        }
        console.log( `\n`);
    }
}
Star();

// const revStart = ()=> { 
//     for (let i = 1; i<=5; i++)
//     {
//         for (let s = 1; s<=5-i; s++)
//         {
//             console.log(` `);
//         }
//         for (let j = 1; j<=i; j++)
//         {
//             console.log(`*`);
//         }
//     }
//     console.log(`\n`);
// }

// revStart();