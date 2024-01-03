/* 3) Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados. */

const a = 5;
const b = 8;
const c = 13;

if(a > b && a > c) {
  console.log('A é o maior dos três números');
} else if(b > a && b > c) {
  console.log('B é o maior dos três números');
} else {
  console.log('C é o maior dos três números');
}