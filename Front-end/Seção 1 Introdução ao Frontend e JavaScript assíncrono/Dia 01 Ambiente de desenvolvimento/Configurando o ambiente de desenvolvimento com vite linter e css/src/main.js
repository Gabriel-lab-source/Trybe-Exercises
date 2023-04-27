import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;

    // Da forma abaixo a senha é copiada automaticamente quando damos o click no botão:

    copy(randomPassword);
});

// Outra forma de fazer a cópia da senha:

/* displayPasswordEl.addEventListener('click', (event) => {
    copy(event.target.innerHTML);
    alert('Senha copiada!');
}); */