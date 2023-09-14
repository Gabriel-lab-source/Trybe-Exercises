const inputCoin = document.getElementById('coinType');
const searchBTN = document.getElementById('searchBTN');
const divElem = document.getElementById('div')
const api = 'https://api.exchangerate.host/latest?base=${moeda}'

searchBTN.addEventListener('click', async () => {
  const fetchAPI = await fetch(`https://api.exchangerate.host/latest?base=${inputCoin.value}`);
  const response = await fetchAPI.json(); 
  const objArray = Object.entries(response.rates);
  const createUl = document.createElement('ul')
  for(let i = 0; i < objArray.length; i+=1) {
    const createLi = document.createElement('li');
    createLi.innerText = `${objArray[i][0]} ${objArray[i][1]}`
    createUl.appendChild(createLi);
  }
  divElem.appendChild(createUl)
})