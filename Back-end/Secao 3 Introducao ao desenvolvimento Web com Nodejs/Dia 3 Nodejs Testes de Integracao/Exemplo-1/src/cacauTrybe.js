const fs = require('fs').promises;
const { join } = require('path');

const path = './files/CacauTrybeFile.json';

const readCacauTrybeFile = async () => {
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    console.error('Error reading or parsing file:', error);
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const findChocolateByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  const findChocolate = cacauTrybe.chocolates.filter((chocolate) => 
  chocolate.name.toLowerCase().includes(query.toLowerCase()));
  return findChocolate;
};

const writeCacauTrybeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
};

const updateChocolate = async (id, chocolate) => {
  const cacauTrybe = await readCacauTrybeFile();
  const findChocolate = await getChocolateById(Number(id));
  if (findChocolate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolateItem) => {
      if (chocolateItem.id === Number(id)) return { id: Number(id), ...chocolate };
      return chocolateItem;
    });
    // await writeCacauTrybeFile(cacauTrybe);
    return { ...findChocolate, ...chocolate };
  }
  return false;
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    findChocolateByName,
    writeCacauTrybeFile,
    updateChocolate,
};
