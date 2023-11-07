import Swal from 'sweetalert2';

const imgEl = document.querySelector('#img');
const nameEl = document.querySelector('#name');
const btnEl = document.getElementById('btn');

const numberOfHeroes = 1000;

const randomNumber = () => Math.round(Math.random() * numberOfHeroes);

const BASE_URL = 'https://akabab.github.io/superhero-api/api';

btnEl.addEventListener('click', () => {
  const id = randomNumber();

  fetch(`${BASE_URL}/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      imgEl.src = data.images.lg;
      nameEl.innerHTML = data.biography.fullName;
    }).catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
