// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// Dicas:

// 1 - Uma string é um array de caracteres, então cada elemento do array é uma letra.
// 2 - O valor de cada numeral romano é:

// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

const romanNumerals = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000
}

function convertRomanNumber (number) {
  const len = number.length;
  let sum = romanNumerals[number[len - 1]];
  let atual = romanNumerals[number[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const prox = romanNumerals[number[len - i]];
    if (atual <= prox) {
      sum += prox;
    } else {
      sum -= prox;
    }
    atual = prox;
  }
  return sum;
}

// let number = 'LC'
// const len = number.length;
// let sum = romanNumerals[number[len - 1]];
// let atual = romanNumerals[number[len - 1]];
// console.log(sum);

console.log(convertRomanNumber('MMXXII')); // 2018
console.log(convertRomanNumber('VI')); // 6
console.log(convertRomanNumber('IV')); // 4
