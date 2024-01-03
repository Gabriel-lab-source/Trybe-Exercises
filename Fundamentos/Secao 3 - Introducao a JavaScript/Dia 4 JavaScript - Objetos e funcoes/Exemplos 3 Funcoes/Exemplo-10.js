// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// 1 - Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// 2 - Um ângulo será considerado inválido se não tiver um valor positivo.

function returnTriangle (a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    return 'Erro, um dos valores é negativo'
  } else if (a + b + c === 180) {
    return true;
  } else {
    return false;
  }
}

console.log(returnTriangle(-50, 70, 60));
console.log(returnTriangle(50, -70, 60));
console.log(returnTriangle(50, 70, -60));
console.log(returnTriangle(50, 70, 60));
console.log(returnTriangle(50, 70, 0));
console.log(returnTriangle(50, 70, 80));