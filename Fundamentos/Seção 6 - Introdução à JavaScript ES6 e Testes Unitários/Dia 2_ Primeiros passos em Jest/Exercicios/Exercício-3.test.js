const { encode, decode } = require('./Exercício-3');

describe('Testa as funções encode e decode', () => {
  test('Encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('A função encode retorna "1, 2, 3, 4, 5" se os parâmetros forem as vogais "a, e, i, o, u"', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  });
  test('A função decode retorna "a, e, i, o, u" se os parâmetros forem "1, 2, 3, 4, 5" ', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  });
  test('A função decode retorna uma string convertendo os números de 1 a 5 em vogais, sem alterar as consoantes da string', () => {
    expect(decode('S4c4rr1m-m2, s5b3 n4 4n3b5s 2m M1rr4c4s')).toEqual('Socorram-me, subi no onibus em Marrocos');
  });
  test('A função encode retorna uma string convertendo as vogais em números de 1 a 5 respectivamente, sem alterar as consoantes da string', () => {
    expect(encode('Socorram-me, subi no onibus em Marrocos')).toEqual('S4c4rr1m-m2, s5b3 n4 4n3b5s 2m M1rr4c4s');
  });
  test('A função encode retorna uma string do mesmo tamanho que a string dada por parâmetro', () => {
    expect(encode('Socorram-me, subi no onibus em Marrocos').length).toEqual(39);
  });
  test('A função decode retorna uma string do mesmo tamanho que a string dada por parâmetro', () => {
    expect(decode('S4c4rr1m-m2, s5b3 n4 4n3b5s 2m M1rr4c4s').length).toEqual(39);
  });
});