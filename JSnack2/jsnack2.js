'use strict'

const word1 = prompt("Inserisci la prima parola:");
const word2 = prompt("Inserisci la seconda parola:");

const word1Length = word1.length;
const word2Length = word2.length;

if (word1Length < word2Length) {
    console.log(word1 + " è piu corta di " + word2);
} else if (word1Length > word2Length) {
    console.log(word2 + "è piu lunga di " + word1);
} else {
    console.log("Le parole hanno la stessa lunghezza.");
}