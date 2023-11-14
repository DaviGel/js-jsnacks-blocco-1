'use strict';

/*
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo
*/

const N = prompt('Inserisci un numero:');

for (let i = 0; i < N; i++) {
  const array = [];
  for (let c = 0; c < 10; c++) {
    array[c] = Math.floor(Math.random() * 100) + 1;
  }
  console.log(array);
}
