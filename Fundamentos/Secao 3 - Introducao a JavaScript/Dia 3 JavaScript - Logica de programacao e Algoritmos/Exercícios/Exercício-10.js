// Faça um programa que diz se um número definido numa variável é primo ou não.

const number = 31;
let divisors = 1;

for (let index = 2; index < number; index += 1) {
  if ((number % index) === 0) {
    divisors += 1;
  }
}

if (divisors > 1) {
  console.log(`O número ${number} não é primo`);
} else {
  console.log(`O número ${number} é primo`);
}