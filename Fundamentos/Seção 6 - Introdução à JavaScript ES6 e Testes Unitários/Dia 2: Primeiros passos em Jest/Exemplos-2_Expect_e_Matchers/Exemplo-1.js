// Nos tipos primitivos, a atribuição ocorre por valor, ou seja, uma cópia do valor original, pois eles são imutáveis. Eles são como gêmeos, e uma vez que o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo:

let gemeoUm = 'Cabelo comprido';
let gemeoDois = gemeoUm;

gemeoUm = 'Careca';

console.log(gemeoUm); // Careca
console.log(gemeoDois); // Cabelo comprido
