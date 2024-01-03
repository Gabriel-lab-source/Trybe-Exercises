let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let number of numbers) {
  console.log(number);
}

// Some todos os valores contidos no array e imprima o resultado;

let sum = 0;

for (let number of numbers) {
  sum += number
}

console.log(sum);

// Calcule e imprima a média aritmética dos valores contidos no array;

const average = sum / numbers.length;

console.log(average);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (average > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let biggerNumber = numbers[0];

for (let number of numbers) {
  if (number > biggerNumber) {
    biggerNumber = number;
  }
}

console.log(biggerNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let oddNumbers = 0;

for (let number of numbers) {
  if (number % 2 !== 0) {
    oddNumbers += 1
  }
}

if (oddNumbers === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(oddNumbers);
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let smallerNumber = numbers[0];

for (let number of numbers) {
  if (number < smallerNumber) {
    smallerNumber = number;
  }
}

console.log(smallerNumber);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let arrayOfNumbers = [];

for (let index = 1; index <= 25; index += 1) {
  arrayOfNumbers.push(index);
}

console.log(arrayOfNumbers);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2

for (let number of arrayOfNumbers) {
  console.log(number / 2);
}