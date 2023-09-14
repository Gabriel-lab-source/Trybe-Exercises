// Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 7;
const symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += symbol;
    }
  }
  console.log(inputLine);
  inputLine = ''; // Reseta o imputLine, assim ele não concatenará resultados anteriores no loop.
  inputPosition -= 1; // O valor de inputPosition precisa diminuir a cada loop também, pois só assim os "*" serão colocados uma posição à frente do anterior.
};
