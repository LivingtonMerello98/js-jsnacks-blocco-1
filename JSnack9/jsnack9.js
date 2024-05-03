'use strict'

const myArray = [];

//ciclo for per 10 richieste di numeri interi
for (let i = 0; i < 2 ; i++ ){
    //richiedo un numero intero da utente e lo metto in array
    let userNumber = parseInt(prompt("inserisci numero"));
    myArray.push(userNumber);
}

//first debug
console.log(myArray)

const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//second debug
console.log(sum);