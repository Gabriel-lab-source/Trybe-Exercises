const createItem = require('./Exercício-1');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    const expectedObj = { name: 'banana', unit: 'kg', price: 1.99, quantity: 20 };
    const currentObj = createItem('banana', 'kg', 1.99, 20);
    expect(currentObj).toEqual(expectedObj);
  });
  it('utiliza zero como quantidade padrão', () => {
    const currentObj = createItem('banana', 'kg', 1.99);
    expect(currentObj).toHaveProperty('quantity', 0);
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => { createItem() }).toThrow(new Error('O nome do item deve ser uma string'));
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => { createItem(50) }).toThrow(new Error('O nome do item deve ser uma string'))
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => { createItem('Banana', 'kg', -15 ) }).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => { createItem('Maçã', 'kg', 0) }).toThrow(new Error('O preço do item deve ser maior que zero'));
  });
});