// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function returnBiggerNumber(a, b, c) {
  if (a > b && a > c) {
    return 'O primeiro número é o maior';
  } else if (b > a && b > c) {
    return 'O segundo número é o maior';
  } else if (c > a && c > b) {
    return 'O último número é o maior';
  } else {
    return 'Os três números são iguais'
  }
}

console.log(returnBiggerNumber(10, 5, 2));
console.log(returnBiggerNumber(5, 10, 2));
console.log(returnBiggerNumber(5, 2, 10));
console.log(returnBiggerNumber(5, 5, 5));