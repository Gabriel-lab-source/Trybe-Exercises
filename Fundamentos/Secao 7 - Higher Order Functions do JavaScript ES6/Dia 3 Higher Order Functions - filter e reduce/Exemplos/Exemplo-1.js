const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const dadosFiltrados = dados.filter((item) => {
  // retorne apenas os elementos que são do tipo string
  return typeof item === 'string';
});

console.log(dadosFiltrados);

/* const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

dados.filter((item) => typeof item === 'string'); */