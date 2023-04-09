const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.map((number) => number * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const evenNumbers = [];
numbers.forEach((number) => {
  if (number < 5 && number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers); // Retorno: [2, 4]
