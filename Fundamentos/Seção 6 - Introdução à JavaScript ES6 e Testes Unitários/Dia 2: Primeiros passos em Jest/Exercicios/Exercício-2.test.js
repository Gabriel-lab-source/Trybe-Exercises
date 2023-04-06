const myFizzBuzz = require('./Exercício-2');

describe('A função myFizzBuzz:', () => {
  test('retorna fizzbuzz quando o parâmetro é divisível por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('retorna fizz quando o parâmetro é divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('retorna buzz quando o parâmetro é divisível por 5', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  test('retorna o próprio parâmetro se o número não for divisível por 3 nem 5', () => {
    expect(myFizzBuzz(28)).toBe(28);
  });
  test('retorna false quando o parâmetro não é um número', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });
})