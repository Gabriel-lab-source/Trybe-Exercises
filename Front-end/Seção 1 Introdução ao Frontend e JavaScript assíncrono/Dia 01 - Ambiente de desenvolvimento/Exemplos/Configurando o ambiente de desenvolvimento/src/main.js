import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  console.log(displayPasswordEl.innerHTML);
  copy(randomPassword)
});