// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Manga', 'Pêra', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Abacate', 'Maçã', 'Uva'];

const fruitSalad = (fruit, additional) => {
  const updatedList = [...fruit, ...additional]
  return updatedList;
};

console.log(fruitSalad(specialFruit, additionalItens));