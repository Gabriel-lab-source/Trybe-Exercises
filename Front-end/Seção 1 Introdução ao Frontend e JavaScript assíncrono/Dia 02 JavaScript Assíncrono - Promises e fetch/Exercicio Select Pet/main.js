const dogBtn = document.getElementById('randomDogBtn');
const catBtn = document.getElementById('randomCatBtn');
const randomBtn = document.getElementById('surpriseBtn');
const img = document.getElementById('petImg');

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((data) => data.json())
  .then((data) => img.src = data.message)
  .catch((err) => err.message);
});

catBtn.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': 'live_zerVv0PFvCyDdAs5XB1RZt4AcE6m29IhUA1YEYwgY94GcmL2DS6J0bQ6xajTp7O6'
    }
  })
  .then((data) => data.json())
  .then((data) => img.src = data[0].url)
  .catch((err) => err.message);
});

randomBtn.addEventListener('click', () => {
  Promise.any([fetch('https://dog.ceo/api/breeds/image/random'), fetch('https://api.thecatapi.com/v1/images/search', {
    headers: {
      'x-api-key': 'live_zerVv0PFvCyDdAs5XB1RZt4AcE6m29IhUA1YEYwgY94GcmL2DS6J0bQ6xajTp7O6'
    }
  })])
  .then((data) => data.json())
  .then((data) => {
    const url = data.message || data[0].url;
    img.src = url
  })
})