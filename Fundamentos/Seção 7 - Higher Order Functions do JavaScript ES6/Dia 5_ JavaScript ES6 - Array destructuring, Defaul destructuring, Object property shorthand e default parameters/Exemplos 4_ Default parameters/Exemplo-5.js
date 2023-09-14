const adult = [
  {
    weight: 100,
    height: 1.85,
  },
  {
    weight: 90,
    height: 1.72,
  },
  {
    weight: 79,
    height: 1.99,
  },
];

// IMC = Índice de Massa Corporal

function IMC(person) {
  return parseFloat((person.weight/(Math.pow(person.height,2))).toFixed(2));
}

console.log(adult.map(IMC));
