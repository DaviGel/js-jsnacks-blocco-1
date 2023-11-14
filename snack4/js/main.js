/*
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.
*/

const array = [];
let somma = 0;
let i = 0;

// while (somma < 50) {
//   array.push(Number(prompt('Inserisci un numero:')));
//   if (!isNaN(array[i])) {
//     somma += array[i];
//   } else {
//     console.log(
//       'Hai inserito un carattere che non verrà conteggiato nella somma.'
//     );
//   }
//   i++;
// }

do {
  i = Number(prompt('Inserisci un numero:'));
  if (!isNaN(i)) {
    somma += i;
  } else {
    console.log('Hai inserito un valore che non verrà conteggiato nella somma');
  }
} while (somma < 50);

console.log('La somma è dei numeri inseriti è', somma);
