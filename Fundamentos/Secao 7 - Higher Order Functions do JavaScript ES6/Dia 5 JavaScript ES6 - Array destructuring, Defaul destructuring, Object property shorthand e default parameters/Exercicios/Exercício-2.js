const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (...cars) => cars.map(([nome, marca, ano]) => ({nome, marca, ano}));

console.log(toObject(palio, shelbyCobra, chiron));