// TASK1


let num1 = +prompt('son kiriting')

let num2 = +prompt('2 sonni kiriting')
let prompt1 = +prompt('  amalni tanlang :\n1. qoshish \n 2.ayirsh\n  3.bolish \n4.kopaytirish ')
let result;
if (prompt1 === 1) {
    result = num1 + num2
    console.log(`${num1 + num2 ,result}`);
}

else if (prompt1 === 2) {
    result = num1 - num2
    console.log(`${num1 - num2 , result}`);
}
else if (prompt1 === 3) {
    result = num1 / num2
    console.log(`${num1 / num2,result}`);
}
else if (prompt1 === 4) {
    result = num1 *num2
    console.log(`${num1 * num2 , result}`);
}

else {
    console.log('amalni notogri tanladingiz');
}




// TASK2



// let botplayer = Math.ceil(Math.random() * 3)

// let userplayer = +prompt('son kiriting \n 1.qaychi \n 2.qogoz \n 3.quduq')


// console.log(botplayer);
// console.log(userplayer);

// if (botplayer === 1) {
//     console.log('qaychi');
// }
// else if (botplayer === 2) {
//     console.log('qogoz');
// }

// else if (botplayer === 3) {
//     console.log('quduq');
// }

// if (userplayer === botplayer) {
//     console.log('Durrang');
// }

// else if (userplayer === 1 && botplayer === 2) {
//     console.log('you win');
// }

// else if (userplayer === 2 && botplayer === 1) {
//     console.log('bot wins');
// }

// else if (userplayer === 3 && botplayer === 1) {
//     console.log('you win');
// }
// else if (userplayer === 1 && botplayer === 3) {
//     console.log('bot wins');
// }
// else if (userplayer === 3 && botplayer === 2) {
//     console.log('you win');
// }

// else if (userplayer === 2 && botplayer === 3) {
//     console.log('bot wins');
// }



// TASK3


// let a = +prompt('ball kirgizin')

// if (a <= 100 && a > 85) {
//     console.log('budjet');
// }

// else if(a<=85 && a>61){
//     console.log('kontrakt');
// }

// else if(a<=61 && a>50){
//     console.log('supperkontrakt');
// }

// else{
//     console.log('failed');
// }