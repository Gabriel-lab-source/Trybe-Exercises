// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function returnNumberValue (a) {
  if (a > 0) {
    return 'Positive';
  } else if (a < 0) {
    return 'Negative';
  } else {
    return 'Zero'
  }
}

console.log(returnNumberValue(5));
console.log(returnNumberValue(-5));
console.log(returnNumberValue(0));