'use strict';

/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti */

let numero = 0;
let inputNumero = 0;

for (let i = 0; i < 10; i++) {
  inputNumero = Number(prompt('Inserisci un numero:'));
  numero += inputNumero;
}

console.log(`La somma dei numeri è ${numero}`);
