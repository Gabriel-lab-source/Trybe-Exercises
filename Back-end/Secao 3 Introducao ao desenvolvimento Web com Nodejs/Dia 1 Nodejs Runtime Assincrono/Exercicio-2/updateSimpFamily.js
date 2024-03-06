const fs = require('fs').promises;

async function writeNewSimp() {
  const readSimpFamilyFile = await fs.readFile('./simpsonFamily.json');
  const simpFamilyData = JSON.parse(readSimpFamilyFile);
  const removeSimp = simpFamilyData.filter((simp) => simp.id !== '5');
  const newSimp = {
    id: '5',
    name: 'Maggie Simpson'
  }
  await fs.writeFile('./simpsonFamily.json', JSON.stringify([...removeSimp, newSimp]));
};

writeNewSimp();