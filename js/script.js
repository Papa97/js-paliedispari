// 1 ES 
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// inserisco il mio numero 

let urNum = parseInt(prompt('inserisci il tuo numero'));
if (urNum > 5) {
    urNum = parseInt(prompt('inserisci un numero da 1 a 5'));
} else if (urNum < 1 ) {
    urNum = parseInt(prompt('inserisci un numero da 1 a 5'));
}
console.log('mio numero ' + urNum);
document.getElementById('ur-num').innerHTML ='il tuo numero e: ' + urNum;

// inserisco se voglio mettere pari o dispari e controllo che scriva correttamente
let pariDispari = prompt('inserisci pari o dispari');
if (pariDispari != 'pari' && pariDispari != 'dispari'){
    pariDispari= prompt('Attenzione inserisci pari o dispari');
}
console.log(pariDispari);
document.getElementById('ur-even').innerHTML ='hai scelto: ' +  pariDispari;

// il computer sceglie il suo numero in modo casuale tra 1 e 5
const numeroComp = Math.floor(Math.random()*5)+1;
// const numeroComp = 3;
console.log('numero computer ' + numeroComp);
document.getElementById('pc-num').innerHTML ='il numero del cumputer e: ' +  numeroComp;


function parDispFunction (num1 , num2) {
    let somma = num1 + num2;
    if (somma % 2 == 0){
        return true;
    }
    return false;
}

const risultatoFunction = parDispFunction(urNum,numeroComp);
console.log(risultatoFunction);


// faccio degli if per concretizzare il vincitore
if (risultatoFunction == true) {
    if (pariDispari == 'pari') {
        console.log('complimenti hai vinto');
        document.getElementById('result').innerHTML = 'Complimenti hai vinto';

    } else {
        console.log('mi dispiace hai perso');
        document.getElementById('result').innerHTML = 'Mi dispiace hai perso';

    }
} else {
    if (pariDispari == 'pari') {
        console.log('mi dispiace hai perso');
        document.getElementById('result').innerHTML = 'Mi dispiace hai perso';
    } else {
        console.log('complimenti hai vinto');
        document.getElementById('result').innerHTML = 'Complimenti hai vinto';

    }
}

// ES 2 
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

const parola = prompt('inserisci la parola');
console.log(parola);
document.getElementById('ur-word').innerHTML = 'la tua parola e: ' + parola;
let newParola = '';
// console.log(parola.length);
// console.log(parola[3]);
for (let i = parola.length - 1; i >= 0 ; i--) {
    newParola += parola[i];
    console.log(newParola);
}
console.log(newParola);
document.getElementById('reverse-word').innerHTML= 'la parola al contrario e: ' + newParola;
if (newParola == parola) {
    console.log('la parola e palindroma');
    document.getElementById('pal-result').innerHTML = 'la parola e palindroma';
} else {
    console.log('la parola non e palindroma');
    document.getElementById('pal-result').innerHTML = 'la parola non e palindroma';

}