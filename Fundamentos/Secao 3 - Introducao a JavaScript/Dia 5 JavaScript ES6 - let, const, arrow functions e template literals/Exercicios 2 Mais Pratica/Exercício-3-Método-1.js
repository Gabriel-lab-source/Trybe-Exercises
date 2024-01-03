// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

// Exemplo:

// longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let biggerWord = '';
  
  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      biggerWord = word;
    }
  }
  return biggerWord
}

console.log(longestWord('Socorram-me, subi no ônibus em Marrocos'));