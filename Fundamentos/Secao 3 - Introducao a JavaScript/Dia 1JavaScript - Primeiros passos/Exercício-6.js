/* Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let chessPiece = 'horse'

switch (chessPiece.charAt().toUpperCase() + chessPiece.slice(1)) {
    case 'King':
      console.log('Rei-> Uma casa apenas para qualquer direção.');
      break;
    case 'Bishop':
      console.log('Bispo-> Faz movimentos somente na diagonal, podendo ser mais de uma casa.');
      break;
    case 'Queen':
      console.log('Rainha-> Faz movimentos na diagonal, horizontal e vertical, podendo ser mais de uma casa em qualquer dessas direções.');
      break;
    case 'Horse':
      console.log('Cavalo -> Faz movimentos em "L" e pode pular sobre as peças.');
      break;
    case 'torre':
      console.log('Torre -> Horizontal e vertical, podendo ser mais de uma casa.');
      break;
    case 'peão':
      console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
      break;
    default:
      console.log('Erro, peça inválida!');
      break;
  };