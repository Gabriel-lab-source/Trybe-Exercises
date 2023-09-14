var frutas = [];
frutas.push('banana', 'maça', 'pêssego');

console.log(frutas.length); // 3

/* Quando configurar uma propriedade num array Javascript em que a propriedade é um índice valido do array e este índice está fora do atual limite do array, o array irá crescer para um tamanho grande o suficiente para acomodar o elemento neste índice, e a engine irá atualizar a propriedade length do array de acordo com isto: */

frutas[5] = 'manga';
console.log(frutas[5]); // 'manga'
console.log(frutas); // [ 'banana', 'maça', 'pêssego', <2 empty items> (2 itens vazios), 'manga' ]
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 6

// Configurar a propriedade length diretamente, também resulta em um comportamento especial:

frutas.length = 10;
console.log(frutas) // [ 'banana', 'maça', 'pêssego', <2 empty items>, 'manga', <4 empty items> ]
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 10

// Diminuir o valor de length, entretanto, apaga elementos:

frutas.length = 2;
console.log(frutas) // [ 'banana', 'maça' ]
console.log(Object.keys(frutas)); // ['0', '1']
console.log(frutas.length); // 2