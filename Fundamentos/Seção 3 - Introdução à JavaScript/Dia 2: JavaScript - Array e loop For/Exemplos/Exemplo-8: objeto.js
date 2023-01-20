var promessa = {
  'var': 'texto',
  'array': [1, 2, 3, 4]
};

console.log(promessa['var']);
// texto
console.log(promessa.var);
// texto
console.log(promessa.array.indexOf(4));
// 3 (4 é o terceiro índice do array)
console.log(promessa.array[1]);
// 2