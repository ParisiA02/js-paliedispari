/*
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

    1. chiedo all'utente di scegliere pari o dispari
    2. input numero utente
    3. genero un numero random per il computer -> funzione
    4.1 sommo i numeri
    4.2 controllo se siano pari o dispari -> funzione
    5. output
*/

let scelta = prompt("pari o dispari?"); 
let userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));

let computerNumber = randomNum();

console.log("Il tuo numero: ",userNumber);
console.log("Numero del pc: ",computerNumber);

risultato = userNumber + computerNumber;

let pariOdispari = pari(risultato);

if(pariOdispari === true){
    risultato = "pari";
}else{
    risultato = "dispari";
}

console.log("la tua scelta: ", scelta);
console.log("il risultato: ", risultato);

if(scelta == risultato){
    console.log("hai vinto!");
}else{
    console.log("hai perso!");
}


//funzioni

function randomNum(){
    numero = Math.floor(Math.random() * 5 + 1);
    return numero;
}

function pari(int) {
    risultato = true;
    if(int %2 !== 0){
        risultato = false;
    }
    return risultato;
}