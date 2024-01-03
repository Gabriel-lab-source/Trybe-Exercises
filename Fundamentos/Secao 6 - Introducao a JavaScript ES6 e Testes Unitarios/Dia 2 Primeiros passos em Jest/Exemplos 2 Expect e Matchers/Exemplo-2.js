// Os objetos têm atribuição por referência, ou seja, a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele. Eles são mutáveis, portanto podemos considerar que é uma forma de criar um apelido (alias) para o original, isto é, você pode ser chamado pelo seu nome ou por seu apelido, mas você é uma pessoa única, não é possível criar um clone seu. Veja este exemplo:

let myName = { firstName: 'Pedro' };
let identity = myName;

myName.firstName = 'Carol';

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol