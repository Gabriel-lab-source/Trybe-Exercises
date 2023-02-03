// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;

// n = 7

//    *
//   * *
//  *   *
// *******

const n = 7;
const symbol = '*';
const middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for(let col = 1; col <= n; col += 1) {
    if (col === controlLeft || col === controlRight || line === middle) {
      outputLine += symbol;
    }
    else {
      outputLine += ' '
    }
  }
  console.log(outputLine);
  controlRight += 1;
  controlLeft -= 1
}