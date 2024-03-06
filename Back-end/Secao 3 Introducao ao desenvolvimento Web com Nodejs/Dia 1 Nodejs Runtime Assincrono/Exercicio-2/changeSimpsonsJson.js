const fs = require('fs').promises;

async function filterSimpsons() {
  const simpFile = await fs.readFile('./simpsons.json');
  const simpData = JSON.parse(simpFile);
  const filterSimp = simpData.filter((simp) => simp.id !== '6' && simp.id !== '10');
  await fs.writeFile('./simpsons.json', JSON.stringify(filterSimp));
}

filterSimpsons()