const cep = '30130-010'; 

const getDataFromCep = async () => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(error)
  }
} 

getDataFromCep();