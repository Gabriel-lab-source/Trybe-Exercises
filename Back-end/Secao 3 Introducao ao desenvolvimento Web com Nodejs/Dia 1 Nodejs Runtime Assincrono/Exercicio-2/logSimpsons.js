const fs = require('fs').promises;

async function fsSimpsons() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    strings.forEach((string) => console.log(string));
  } catch (error) {
    console.error(`Error ao ler o arquivo: ${error.message}`)
  }
};

fsSimpsons();