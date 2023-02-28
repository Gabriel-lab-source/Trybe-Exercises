// Situação em que usar o operador ternário não faz muito sentido:

const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary = (fruit) => (fruit === `maçã`) ? `Essa fruta é vermelha` 
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

  console.log(checkTernary('maçã'));

// Aninhar operadores ternários, como no exemplo acima, não é uma boa prática, pois torna seu código truncado e difícil de ler, tirando todo o sentido de um operador cujo objetivo é facilitar sua vida e a da pessoa que lerá seu código no futuro!