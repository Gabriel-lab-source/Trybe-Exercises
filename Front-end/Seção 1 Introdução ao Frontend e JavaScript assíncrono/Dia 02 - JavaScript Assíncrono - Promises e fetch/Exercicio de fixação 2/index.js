import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';

// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
  .then((response) => response.json())
  .then(({ users }) => fillUsersSelect(users));

usersSelect.addEventListener('change', (e) => {
  clearPageData();
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  const usersSelectValue = e.target.value;
  fetch(`https://dummyjson.com/posts/use/${usersSelectValue}`)
  .then((response) => response.json())
  .then(({ posts }) => { 
    fillPosts(posts);
    const firstElementId = posts.shift().id;
    fetch(`https://dummyjson.com/posts/${firstElementId}/comments`)
    .then((response) => response.json())
    .then(({ comments }) => fillFeaturedPostComments(comments))
  }).catch((error) => { 
    fillErrorMessage('Erro ao chamar informações')
    console.log(error.message);
  })
});