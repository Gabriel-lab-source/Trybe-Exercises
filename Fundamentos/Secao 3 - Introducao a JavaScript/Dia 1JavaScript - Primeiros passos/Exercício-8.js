/* Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if. */

const a = 11;
const b = 15;
const c = 8;

let isEven = false;

if((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
}

console.log(isEven);