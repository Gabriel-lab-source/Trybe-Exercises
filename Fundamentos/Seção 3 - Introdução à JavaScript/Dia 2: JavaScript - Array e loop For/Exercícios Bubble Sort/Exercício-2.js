// Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
      // Quando o segundo número no array é maior que o primeiro, a posição do segundo é salva em uma variável, então o segundo número (que é o maior) é salvo no lugar do primeiro (que é o menor), por meio da atribuição de igualdade: "numbers[index] = numbers[secondIndex];" e, por fim, o primeiro número, que foi salvo na constante, toma o lugar do segundo, por meio da atribuição de igualdade: "numbers[secondIndex] = position;". Teste o processo acontecendo número a número, utilizando o console.log(numbers) dentro desse escopo condicional. 
    }
  }
}

console.log(numbers);