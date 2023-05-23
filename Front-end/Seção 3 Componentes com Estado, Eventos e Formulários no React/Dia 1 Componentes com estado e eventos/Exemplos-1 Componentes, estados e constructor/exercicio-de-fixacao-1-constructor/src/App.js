import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
  }

// Se a função for escrita da maneira abaixo, é necessário fazer o bind do botão no constructor

handleClickBtn1() {
  console.log('Clicou no botão 1!');
  console.log(this);
}

// Se for escrita dessa forma, NÃO será necessário fazer o bind no constructor

handleClickBtn2 = () => {
  console.log('Clicou no botão 2!');
  console.log(this);
}

// Se for escrita dessa forma, também é necessário fazer o bind

handleClickBtn3 = function handleClick() {
  console.log('Clicou no botão 3!');
  console.log(this);
}

  render() {
    return (
      <div>
        <button onClick={ this.handleClickBtn1 }>Meu botão 1</button>
        <button onClick={ this.handleClickBtn2 }>Meu botão 2</button>
        <button onClick={ this.handleClickBtn3 }>Meu botão 3</button>
      </div>
    )
  }
}

export default App;