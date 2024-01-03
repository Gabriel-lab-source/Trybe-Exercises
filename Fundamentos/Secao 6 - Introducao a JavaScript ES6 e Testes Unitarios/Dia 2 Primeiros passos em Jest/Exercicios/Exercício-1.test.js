const myRemove = require('./Exercício-1');

describe('A função myRemove', () => {
  test('Se chamada com os parâmetros: [1, 2, 3, 4] e 3 retorna o array [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  test('Se chamada com os parâmetros: [1, 2, 3, 4] e 3 não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  test('Se chamada com os parâmetros: [1, 2, 3, 4] e 5 retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  });
})