// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0]

// console.log(array[0].length);

for (let index = 0; index < array.length; index += 1) {
  if (biggerWord.length < array[index].length) {
    biggerWord = array[index];
  }
}

console.log(`A maior palavra no array é: ${biggerWord}`);

let shorterWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (shorterWord.length > array[index].length) {
    shorterWord = array[index];
  }
}

console.log(`A menor palavra no array é: ${shorterWord}`);