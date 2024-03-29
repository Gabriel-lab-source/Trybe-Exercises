import getAddressFromCep from './getAddressFromCep';
document.querySelector('button').addEventListener('click', handleClick);

export default async function handleClick() {
  const cep = document.querySelector('input').value;

  try {
    const addressData = await getAddressFromCep(cep);
    document.querySelector('pre').innerHTML = JSON.stringify(addressData);
  } catch (error) {
    alert(error.message);
  }
}
