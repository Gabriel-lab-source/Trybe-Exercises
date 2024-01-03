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
    this.getButtonColor = this.getButtonColor.bind(this);
  }

getButtonColor (num) {
  return num % 2 === 0 ? 'Green' : 'White';
};

handleClickBtn1() {
  const { cliquesEmBtn1 } = this.state;
  this.setState((prevState) => ({
    cliquesEmBtn1: prevState.cliquesEmBtn1 + 1,
  }), () => {
    console.log(this.getButtonColor(cliquesEmBtn1));
  })
};

handleClickBtn2 = () => {
  const { cliquesEmBtn2 } = this.state;
  this.setState((prevState) => ({
    cliquesEmBtn2: prevState.cliquesEmBtn2 + 1
  }), () => {
    console.log(this.getButtonColor(cliquesEmBtn2));
  })
}

handleClickBtn3 = function handleClick() {
  const { cliquesEmBtn3 } = this.state;
  this.setState((prevState) => ({
    cliquesEmBtn3: prevState.cliquesEmBtn3 + 1
  }), () => {
    console.log(this.getButtonColor(cliquesEmBtn3));
  })
};

  render() {
    const { cliquesEmBtn1, cliquesEmBtn2, cliquesEmBtn3 } = this.state;
    return (
      <div>
        <button style={ { backgroundColor: this.getButtonColor(cliquesEmBtn1) } } onClick={ this.handleClickBtn1 }>Botão 1 foi clicado { cliquesEmBtn1 } vez(es)</button>
        <button style={ { backgroundColor: this.getButtonColor(cliquesEmBtn2) } } onClick={ this.handleClickBtn2 }>Botão 2 foi clicado { cliquesEmBtn2 } vez(es)</button>
        <button style={ { backgroundColor: this.getButtonColor(cliquesEmBtn3) } } onClick={ this.handleClickBtn3 }>Botão 3 foi clicado { cliquesEmBtn3 } vez(es)</button>
      </div>
    )
  }
}

export default App;