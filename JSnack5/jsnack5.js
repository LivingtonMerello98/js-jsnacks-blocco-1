'use strict'

alert ('digtia solo numeri dispari')
//array
const myArray = [];

//ciclo for richiesta num a utente per 6 volte

for ( let i = 0 ; i < 6 ; i++){
    //richiama la funzione prompt e converte il valore in intero
    let num = parseInt(prompt("inserisci un numero"));

    //si verifica se il valore inserito è un numero
    if (!isNaN(num)){ 

        //condizione numero dispari
        if(num % 2 !== 0){
            myArray.push(num);
            console.log("L'utente ha digitato un numero dispari valido: " + " "+ num);
        }else{
        //se il numero digitato è pari
            alert('devi digitare un numero dispari!');
            console.log("l'utente ha digitato un numero pari:"+ " "+ num);
            i--;
        }

    // se il valore digitato non è un numero    
    } else {
            alert("devi digitare un numero valido");
            console.log("l'utente ha digitato un valore non numerico");
            i--;
    }
}
console.log({myArray})


