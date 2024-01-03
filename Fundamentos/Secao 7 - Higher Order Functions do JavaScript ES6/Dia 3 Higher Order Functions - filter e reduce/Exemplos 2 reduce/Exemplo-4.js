const numbers = [1, 32, 44, 2, 3];

const sumNumbers =  (acc, curr) => acc + curr;

const totalSum = numbers.reduce(sumNumbers, 30);

console.log(totalSum); //112