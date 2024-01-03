// Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumbers = (number) => number % 2 === 0;

const sumEvenNum = (acc, curr) => acc + curr;

const total = numbers.filter(evenNumbers).reduce(sumEvenNum)

console.log(total);

