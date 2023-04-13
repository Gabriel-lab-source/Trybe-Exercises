const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult = 20;
const countA = () => {
  const joinNames = names.join('').toLowerCase().split('');
  const countAInNames = joinNames.reduce((acc, curr) => curr === 'a' ? acc+= 1 : acc, 0)
  return countAInNames;
};

console.log(countA());