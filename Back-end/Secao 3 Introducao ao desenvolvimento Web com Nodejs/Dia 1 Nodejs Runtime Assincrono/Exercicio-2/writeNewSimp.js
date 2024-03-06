const fs = require('fs').promises;

async function writeNewSimp() {
  const readSimpFamilyFile = await fs.readFile('./simpsonFamily.json');
  const simpFamilyData = JSON.parse(readSimpFamilyFile);
  const newSimp = {
    id: '5',
    name: 'Nelson Muntz'
  }
  const writeNewSimpson = await fs.writeFile('./simpsonFamily.json', JSON.stringify([...simpFamilyData, newSimp]));
};

writeNewSimp();