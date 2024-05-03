'use strict'

let sum = 0;

// Utilizza un loop per chiedere all'utente di inserire un numero 10 volte.
for (let i = 0; i < 10; i++) {
    // Chiedi all'utente di inserire un numero utilizzando prompt .
    const num = parseInt(prompt("Inserisci un numero:"));

    sum += num;
}

console.log("La somma di tutti i numeri inseriti è:", sum);
alert("La somma di tutti i numeri inseriti è: " + sum);
