const fs = require('fs').promises;

async function readAndWriteSimpFile() {
  const readSimpFile = await fs.readFile('./simpsons.json');
  const simpData = JSON.parse(readSimpFile);
  const simpSlice = simpData.slice(0, 4)
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpSlice));
};

readAndWriteSimpFile();