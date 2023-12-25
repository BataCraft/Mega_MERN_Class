let player1 = "Dolphins"
let player2 = " Koalas"
let DolphinsScore1 = 97,
DolphinsScore2 = 112,
DolphinsScore3 = 101
KoalasScore1 = 109,
KoalasScore2 = 95,
KoalasScore3 = 123;

let dolphineAv = (DolphinsScore1 + DolphinsScore2 + DolphinsScore3) / 3;
let koalinAv = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
// let finalScore = (dolphineAv > koalinAv) ? `${player1} Score is Higher Than ${player2}` : `${player2} Score is Greater than ${player2}`
console.log(dolphineAv);
console.log(koalinAv);

// console.log(finalScore);

if (dolphineAv >= 100 && koalinAv >= 100)
{
    if (dolphineAv > koalinAv)
    {
        console.log(`${player1}  Wins The Trophy`);
    }
    else if(dolphineAv == koalinAv){
        console.log(`Match Draw`);

    }
    else{
        console.log(`${player2} Wins The Trophy`);
    }
    
}

else if (dolphineAv <= 100 && koalinAv <= 100)
{
    console.log("Both Teams Have Lost");
}
