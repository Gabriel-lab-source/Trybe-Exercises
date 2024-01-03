// Crie uma função que calcule a área de um círculo

// Primeira solução

/* const circleArea = (raio) => `A área desse círculo é : ${Math.round(3.1415 * (raio ** 2))}`

console.log(circleArea(5)); */

// Segunda solução

const circleArea = (radius) => {
  const PI = 3.14;

  let area = PI * (radius ** 2);

  return `Esta é a área do círculo: ${Math.round(area)}`;
};

console.log(circleArea(5));