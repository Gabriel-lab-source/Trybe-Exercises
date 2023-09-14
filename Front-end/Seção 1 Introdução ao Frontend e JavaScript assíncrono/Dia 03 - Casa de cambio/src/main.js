const baseUrl = 'https://api.exchangerate.host';
const urlEndPoint = '/latest';

const coinNameInput = document.getElementById('coinName');
const submitCoinBtn = document.getElementById('submitCoinSearch');
const titleBase = document.getElementById('titleBase');
const currencyList = document.getElementById('currencyList');

const buildLatestExchangeUrl = (currency) => `${baseUrl}${urlEndPoint}?base=${currency}`;

const fetchExchangeRates = async (currency) => {
  try {
    const urlToFetch = buildLatestExchangeUrl(currency);
    const response = await fetch(urlToFetch);
    const jsonResponse = await response.json();
    const exchangeRates = {
      rates: jsonResponse.rates,
      base: jsonResponse.base
    };
    return exchangeRates;
  } catch (err) {
    return err.message;
  }
};

const renderTitleBase = (base) => {
  titleBase.innerHTML = `Valores referentes a 1 ${base}`
};

const renderRates = (currency, value) => {
  const li = document.createElement('li');
  li.innerText = `${currency}: ${value}`;
  currencyList.appendChild(li);
};

const handleExchangeRates = (rates) => {
  const ratesEntries = Object.entries(rates);
  ratesEntries.forEach(([key, value]) => {
    renderRates(key, value)
  })
};

const clearList = () => {
  currencyList.innerHTML = '';
}

const handleSubmitBtn = (event) => {
  event.preventDefault();
  const coinNameInputValue = coinNameInput.value;
  fetchExchangeRates(coinNameInputValue)
  .then((objData) => {
    clearList();
    handleExchangeRates(objData.rates);
    renderTitleBase(objData.base)
  });
};

submitCoinBtn.addEventListener('click', handleSubmitBtn);