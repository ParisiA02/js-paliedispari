/*
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma.
    Dare l’output relativo.

    1. chiedo all'utente la parola da controllare
    2. invoco la -> funzione(){
        2.1 divido la parola a metà
        2.2 controllo se la prima parte della parola è uguale alla seconda
        2.3 se è uguale, return true, se è diverso return false   -> if
    }
    3. output
*/

let parola = prompt("Inserisci la parola da controllare: ");
palindroma(parola);

if (controllo){
    console.log("La parola è palindroma");
}else{
    console.log("La parola non è palindroma");
}

function palindroma(str){

    let len = str.length;
    let mid = Math.floor(len/2);

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            controllo = false;
            return controllo;
        }
    }

    controllo = true;
    return controllo;
}

 