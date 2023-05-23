import React from 'react';

/* Embora isso funcione, essa DEFINITIVAMENTE não é a maneira correta de se criar eventos em React! A função se refere ao componente, então deve ser parte de sua classe! */

function handleClickBtn1() {
  console.log('Clicou no botão 1!')
}

const handleClickBtn2 = () => {
  console.log('Clicou no botão 2!');
}

const handleClickBtn3 = function handleClick() {
  console.log('Clicou no botão 3!');
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <div>
        <button onClick={ handleClickBtn1 }>Meu botão 1</button>
        <button onClick={ handleClickBtn2 }>Meu botão 1</button>
        <button onClick={ handleClickBtn3 }>Meu botão 1</button>
      </div>
    )
  }
}

export default App;