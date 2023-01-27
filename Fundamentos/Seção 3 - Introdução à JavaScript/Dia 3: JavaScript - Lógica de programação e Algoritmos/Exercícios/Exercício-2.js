// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let reverseWord = ''

// console.log(word.length);

for (let index = 1; index <= word.length; index += 1) {
  reverseWord += word[word.length - index] 
}

console.log(reverseWord);

// Outra forma:

let word1 = 'tryber';
let reverseWord1 = ''

for (let index = 0; index < word1.length; index += 1) {
  reverseWord1 += word1[word1.length - 1 - index];
}

console.log(reverseWord1);

// Outra solução possível:

let word2 = 'tryber';
let reverseWord2 = '';

reverseWord2 = word2.split('').reverse().join('');

console.log(reverseWord2);