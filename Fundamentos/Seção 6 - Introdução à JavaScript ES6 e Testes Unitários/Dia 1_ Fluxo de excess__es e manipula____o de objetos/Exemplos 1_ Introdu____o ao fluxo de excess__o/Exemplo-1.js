const sum = (value1, value2) => {
  return value1 + value2;
};

console.log(sum(2, '3')); // resultado: 23

// O que aconteceu foi que a sua função, ao perceber que estava fazendo uma operação com parâmetros de tipos distintos (número + string), converteu o primeiro parâmetro para uma string. Assim, a operação realizada foi de concatenação de strings por meio do sinal de +.

// Esse comportamento ocorre porque o JavaScript é uma linguagem dinâmica, ou seja, quando se declara uma variável, não é necessário definir o tipo de dado, o que permite à variável mudar de tipo ao longo da execução do código.

// Por mais que esse aspecto denote alguma flexibilidade, ele também produz comportamentos inesperados.