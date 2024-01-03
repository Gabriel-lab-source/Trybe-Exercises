const dogBtn = document.getElementById('dogBtn');
const catBtn = document.getElementById('catBtn');
const randomBtn = document.getElementById('randomBtn');
const img = document.getElementById('img');

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => img.src = data.message)
});

catBtn.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) => response.json())
  .then(([data]) => img.src = data.url)
});

randomBtn.addEventListener('click', () => {
  Promise.any([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
  .then((response) => response.json())
  .then((data) => {
    const petURL = data.message || data[0].url;
    img.src = petURL;
  })
});