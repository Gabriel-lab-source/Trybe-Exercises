// Faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 7;
const symbol = '*';
let inputLine = '';

const midOfMatrix = (n + 1) / 2; // Pega o índice do meio da string de 8 espaços, já que a lógica do segundo loop é feita com a primeira string sendo sempre um espaço vazio (" "), pois o valor de columnIndex sempre iniciará em 0 e o valor mínimo que controlLeft pode assumir também é 0, tornando a condicional sempre falsa no primeiro loop.
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  // A condição de menor ou igual para lineIndex é estabelecida para que o loop seja percorrido 5 vezes, de 0 a 4 (valor de midOfMatrix).
  for(let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    // Aqui a condição do loop foi feita para que ele acontecesse 8 vezes, deixando a primeira string sempre vazia e, seguindo a lógica de impressão da pirâmide, "*" são impressos a partir da segunda string, se a condição for verdadeira.
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      // No primeiro loop de *lineIndex*, o valor de controlLeft e controlRight será "4" e não estabelece uma condição possível, por isso a primeira linha será só de strings vazias. No segundo, controlLeft vale "3" e controlRight vale "5", por isso, um "*" será impresso na quarta posição da string. No terceiro loop, controlLeft vale "2" e controlRight "6", então três "*" serão impressos, da terceira à quinta posição. No quarto loop de *lineIndex*, controlLeft vale "1" e controlRight "7", portanto, "*" serão impressos da segunda à sexta posição, imprimindo então 5 "*". Seguindo a lógica, no quinto loop serão impressos 7 "*".
      inputLine += symbol;
    } else {
      inputLine += ' '
    }
  }
  console.log(inputLine);
  inputLine = '';
  // A linha deve ser resetada para que inputLine não seja concatenada nos próximos loops, imprimindo resultados diferentes.
  controlRight += 1;
  // Soma-se um a essa variável para que a lógica da condicional possa ser validada a cada loop, somando um "*" adicional à direita.
  controlLeft -= 1
  // Subtrai-se um nessa variável para que a lógica da condicional possa ser validada a cada loop, somando um "*" adicional à esquerda.
}