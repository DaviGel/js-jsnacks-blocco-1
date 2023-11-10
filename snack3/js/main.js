'use strict';

/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti */

let numero = 0;
let inputNumero;

for (let i = 0; i < 10; i++) {
  inputNumero = Number(prompt('Inserisci un numero:'));
  console.log(`Il numero inserito è: ${inputNumero}`);
  numero += inputNumero;
}

console.log(numero);
