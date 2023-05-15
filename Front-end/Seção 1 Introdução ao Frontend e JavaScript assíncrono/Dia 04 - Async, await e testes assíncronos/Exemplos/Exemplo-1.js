// Com then:

const cep = '30130-010'; 
fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(data => console.log(data));

// Com async e await. OBS: await PRECISA ESTAR DENTRO de uma função assíncrona 

const getDataFromCep = async () => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  console.log(data);
}

getDataFromCep();