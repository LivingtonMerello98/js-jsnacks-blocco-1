Snack 9
Calcola la somma e la media dei primi 10 numeri.
Stampa i risultati in console



//prendere i primi 10 n all interno di un array

myArray = []


--ciclo for per 10 richieste ---
for ( let i = 0; i < 10; i++){

    const userPrompt = parseint(prompt("digita numero")) 
    myArray.push(userPrompt)

}
//debug
console.log(myArray);

//sum dei valori all'interno dell'indice

cosnt sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log (sum)

//media dei vlori all interno dell'indice

 const average = sum % myArray.lenght
 console.log(average)