'use strict'

alert ('digtia solo numeri dispari')
//array
const myArray = [];

//ciclo for richiesta num a utente per 6 volte

for ( let i = 0 ; i < 6 ; i++){
    //richiama la funzione prompt e converte il valore in intero
    let num = parseInt(prompt("inserisci un numero"));

    //controlla se il numero è pari o dispari
    if ( num % 2 !== 0 ){
        //se è dispari lo aggiunge all'array con il metodo push
        myArray.push(num);

        console.log("l'utente ha digitato un numero valido, è stato inserito il" + " " + num)


    } else {
        alert ('il numero non è valido')
        console.log("l'utente ha digitato un numero non valido")
    }
}
console.log({myArray})