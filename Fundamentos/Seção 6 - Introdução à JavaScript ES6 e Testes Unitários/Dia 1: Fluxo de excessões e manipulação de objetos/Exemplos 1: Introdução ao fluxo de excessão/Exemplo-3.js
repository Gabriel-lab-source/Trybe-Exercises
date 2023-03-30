// throw new Error()

const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return value1 + value2;
};

console.log(sum(2, '3'));

// A palavra reservada throw serve para lançar uma exceção. No caso, foi definido que essa exceção deveria acontecer caso algum parâmetro não fosse do tipo number, então foi criado esse “erro customizado”. Caso contrário, a função sum apresentaria um comportamento incorreto, pois não realizaria a soma dos valores corretamente.

// O operador new serve para criar um objeto personalizado ou nativo do JavaScript.

// A palavra Error é um objeto nativo do JavaScript que representa um erro. Quando você o chama com o operador new, é criada uma cópia desse objeto, a qual será lançada como uma exceção no seu código.

