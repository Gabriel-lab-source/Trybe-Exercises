import validator from 'validator';

const campoDeTexto = document.querySelector('#value');
const seletor = document.querySelector('#option');
const button = document.querySelector('#button');
const answer = document.querySelector('#answer');
const data = document.querySelector('#data');

seletor.addEventListener('change', (event) => {
  const message = 'Obs: preencha o campo data no formato ano/mês/dia';
  const selector = event.target.value;
  const dataMsg = selector === 'data' ? data.innerHTML = message : data.innerHTML = '';
  return dataMsg;
});

button.addEventListener('click', () => {
  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    email: validator.isEmail(campoDeTexto.value),
    url: validator.isURL(campoDeTexto.value),
    data: validator.isDate(campoDeTexto.value),
    imei: validator.isIMEI(campoDeTexto.value),
  };
  answer.innerHTML = `${seletor.value} ${campos[seletor.value] ? 'válido' : 'inválido'}`;
});
