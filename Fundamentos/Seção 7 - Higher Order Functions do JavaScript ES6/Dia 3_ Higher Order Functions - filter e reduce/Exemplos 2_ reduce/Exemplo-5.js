// Tente criar a função que busca o maior valor do array numbers utilizando apenas o reduce.

const numbers = [50, 85, -30, 3, 15];

const biggerNumber = numbers.reduce((acc, curr) => {
  console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
  return curr > acc ? curr : acc;
})

console.log(biggerNumber);