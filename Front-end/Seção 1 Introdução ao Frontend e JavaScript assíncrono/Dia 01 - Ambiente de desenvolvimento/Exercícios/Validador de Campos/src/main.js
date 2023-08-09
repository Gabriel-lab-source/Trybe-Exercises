import validator from 'validator';

const campoDeTexto = document.getElementById('input-text');
const campoSelect = document.getElementById('select-input');
const botaoValidar = document.getElementById('button');
const campoResposta = document.getElementById('answer');

botaoValidar.addEventListener('click', (e) => {
  e.preventDefault();
  const campos = {
    password: validator.isStrongPassword(campoDeTexto.value, { minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 2, minSymbols: 1, returnScore: false }),
    email: validator.isEmail(campoDeTexto.value),
    date: validator.isDate(campoDeTexto.value, { format: 'DD.MM.YYYY', delimiters: ["."], strictMode: true }),
    imei: validator.isIMEI(campoDeTexto.value),
    url: validator.isURL(campoDeTexto.value),
  };
  campoResposta.innerHTML = `A validação retornou ${campos[campoSelect.value]}`
});