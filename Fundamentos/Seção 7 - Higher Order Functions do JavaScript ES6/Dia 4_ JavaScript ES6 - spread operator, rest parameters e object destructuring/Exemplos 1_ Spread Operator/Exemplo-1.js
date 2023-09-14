const items = ['Camiseta', 'Carregador', 'Chinelo'];
items.push('Meia');

console.log(items); // ['Camiseta', 'Carregador', 'Chinelo', 'Meia']

// const variavel = [...arrayOriginal, itemParaAdicionar];

const newItems = [...items, 'Tênis', 'Calça', {propriedade: 'chave'}, [1,4,5]]

console.log(newItems);

// Não muda o original

console.log(items);