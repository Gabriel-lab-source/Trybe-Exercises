// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

// n = 5

// *****
// *****
// *****
// *****
// *****

const n = 7;

for (let index = 0; index < n; index += 1) {
  let star = '';
  for (let index = 0; index < n; index += 1) {
    star += '*'
  }
  console.log(star);
}

// Outra forma: 

let n1 = 5;
const symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n1; lineIndex += 1) {
  inputLine += symbol;
};

for (let lineIndex = 0; lineIndex < n1; lineIndex += 1) {
  console.log(inputLine);
};
