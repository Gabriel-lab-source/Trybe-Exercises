const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const reduceNumbers = numbers.reduce((acc, curr) => {
  console.log(`O valor de acc é: ${acc}`);
  console.log(`O valor de curr é: ${curr}`);
  return curr;
}, 0)

console.log(reduceNumbers);