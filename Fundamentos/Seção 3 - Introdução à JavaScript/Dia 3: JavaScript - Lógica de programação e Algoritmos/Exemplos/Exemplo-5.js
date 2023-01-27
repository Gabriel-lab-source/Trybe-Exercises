// Pensando numa estrutura de repetição, quantas vezes você pode subtrair 5 de 100?

let sub = 100;
let index = 0

for (index; sub !== 100; index += 1) {
  sub -= 5;
}

console.log(index);

// 1 vez