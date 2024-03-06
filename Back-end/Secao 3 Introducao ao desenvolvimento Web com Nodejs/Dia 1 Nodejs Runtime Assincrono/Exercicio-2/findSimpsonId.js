const fs = require('fs').promises;

async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const findSimpson = simpsons.find((simpson) => id === Number(simpson.id));
  if (!findSimpson) throw new Error('id não encontrado');
  return findSimpson;
}

async function main() {
  const foundSimpson = await getSimpsonById(1);
  console.log(foundSimpson);
}

main();