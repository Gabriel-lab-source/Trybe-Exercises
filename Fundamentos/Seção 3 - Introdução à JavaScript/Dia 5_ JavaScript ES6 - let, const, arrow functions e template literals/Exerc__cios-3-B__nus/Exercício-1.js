// Escreva uma função que substitua a letra ‘x’ em uma frase.

// O nome da função deverá ser substituaX.

// A função deverá receber um nome por parâmetro.

// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'.

// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

// Exemplo:

// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’

// Spoiler: O método split() pode ser utilizado de diferentes maneiras, por exemplo para separar as palavras de um texto.

// Primeiro método:

// const substituaX = (name) => {
//   const tryberIntroduction = `Tryber x aqui!`;
//   const splitedPhrase = tryberIntroduction.split(' ');
//   splitedPhrase[1] = name
//   return splitedPhrase.join(' ');
// }

// console.log(substituaX('Gabriel'));

// Segundo Método: 

const substituaX = name => {
  const tryberIntroduction = `Tryber x aqui!`;
  const splitedPhrase = tryberIntroduction.split(' ');
  for (let index = 0; index < splitedPhrase.length; index += 1) {
    if (splitedPhrase[index] === 'x') {
      splitedPhrase[index] = name;
    }
  }
  return splitedPhrase.join(' ')
}

console.log(substituaX('Gabriel'));