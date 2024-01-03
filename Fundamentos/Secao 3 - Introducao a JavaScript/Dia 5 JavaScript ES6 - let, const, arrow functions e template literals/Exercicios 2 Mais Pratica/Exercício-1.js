// Crie uma função que ligue e desligue o motor de um carro

// Solução 1

// const ligarDesligar = (status) => {
//   if (status === 'desligar') {
//     status = 'desligado';
//   } else {
//     status = 'ligado';
//   }
//   console.log(`O motor está ${status}`);
// };

// Solução 2

const ligarDesligar = (status) => {
  status = status === 'desligar' ? 'desligado' : 'ligado';
  console.log(`O motor está ${status}`);
};

