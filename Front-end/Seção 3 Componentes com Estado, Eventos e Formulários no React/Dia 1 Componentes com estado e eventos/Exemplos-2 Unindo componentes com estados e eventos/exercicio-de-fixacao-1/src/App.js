import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cliquesEmBtn1: 0,
      cliquesEmBtn2: 0,
      cliquesEmBtn3: 0
    };
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn3 = this.handleClickBtn3.bind(this);
  }

handleClickBtn1() {
  console.log('Clicou no botão 1!');
  this.setState((prevState) => ({
    cliquesEmBtn1: prevState.cliquesEmBtn1 + 1,
  }))
}

handleClickBtn2 = () => {
  console.log('Clicou no botão 2!');
  this.setState((prevState) => ({
    cliquesEmBtn2: prevState.cliquesEmBtn2 + 1
  }))
}

handleClickBtn3 = function handleClick() {
  console.log('Clicou no botão 3!');
  this.setState((prevState) => ({
    cliquesEmBtn3: prevState.cliquesEmBtn3 + 1
  }))
}

  render() {
    const { cliquesEmBtn1, cliquesEmBtn2, cliquesEmBtn3 } = this.state;
    return (
      <div>
        <button className='btn1' onClick={ this.handleClickBtn1 }>Botão 1 foi clicado { cliquesEmBtn1 } vez(es)</button>
        <button className='btn2' onClick={ this.handleClickBtn2 }>Botão 2 foi clicado { cliquesEmBtn2 } vez(es)</button>
        <button className='btn3' onClick={ this.handleClickBtn3 }>Botão 3 foi clicado { cliquesEmBtn3 } vez(es)</button>
      </div>
    )
  }
}

export default App;