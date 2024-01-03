// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

function returnBiggerNumber (a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return 'Os dois números são iguais';
  }
}

console.log(returnBiggerNumber(5, 10));
console.log(returnBiggerNumber(10, 5));
console.log(returnBiggerNumber(5, 5));
