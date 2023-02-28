// Escreva uma função que receberá o retorno da Função 1 por parâmetro e retornará uma nova string.

// O nome da função deverá ser minhasSkills.

// A função deverá receber o retorno da Função 1 - substituaX por parâmetro.

// Declare dentro da função uma variável com o nome skills e do tipo const.

// A variável skills deverá ser um array que contenha três strings com tecnologias que você já estudou.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

// Exemplo de retorno:

// Tryber Bebeto aqui!

// Minhas três principais habilidades são:

// JavaScript
// HTML
// CSS

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

// Primeiro método

// const minhasSkills = (funcHere) => {
//   const skills = ['Javascript, HTML, CSS'];
//   let presentation = `
//   ${funcHere}
//   Minhas três principais habilidades são:
//   ${skills}`
//   return presentation;
// }

// console.log(minhasSkills(substituaX('Gabriel')));

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
  ${func}

  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    resultado = `${resultado}
    ${skills[index]}`
  }
  return resultado
};

console.log(minhasSkills(substituaX('Gabriel')));