Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
Se è dispari inseriscilo nell’array.
Stampa in console l'array risultante.

//crea un array vuoto

const myArray = [];

//Chiedi per 6 volte all’utente di inserire un numero,
 
 ---creare un ciclo for che chieda 6 volte al ull utente di inserire un numero---
  for(let i=0; i<6; i++){
    //Richiama la funzione prompt e converte il valore restituito da stringa a intero
      let num = parseInt(prompt("Inserisci un numero:"));
    
    //Controlla se il numero è pari o dispari
      if (num % 2 !==  0){
        //se è dispari lo aggiunge all'array
          myArray.push(num);
      }else{
         alert('Numero non valido');
       }
  }

console.log(myArray);
