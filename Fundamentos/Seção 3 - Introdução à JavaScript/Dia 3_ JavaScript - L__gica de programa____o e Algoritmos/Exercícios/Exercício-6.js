// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n = 7;
const symbol = '*';
let inputLine = '';

for (let index = 0; index < n; index += 1) {
  inputLine += symbol;
  console.log(inputLine);
}