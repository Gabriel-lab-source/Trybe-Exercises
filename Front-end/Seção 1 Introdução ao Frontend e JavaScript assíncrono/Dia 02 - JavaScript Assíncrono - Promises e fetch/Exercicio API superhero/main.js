import Swal from './node_modules/sweetalert2/src/sweetalert2.js';

const img = document.getElementById('img');
const heroName = document.getElementById('name');
const button = document.getElementById('button');
const accessTkn = '979534599887023';
const BASE_URL = `https://superheroapi.com/api.php/${accessTkn}`;

const maxHeroes = 1000;

const randomNumber = () => Math.round(Math.random() * maxHeroes);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = randomNumber();
  fetch(`${BASE_URL}/${id}`)
  .then((result) => result.json())
  .then((data) => console.log(data))
});