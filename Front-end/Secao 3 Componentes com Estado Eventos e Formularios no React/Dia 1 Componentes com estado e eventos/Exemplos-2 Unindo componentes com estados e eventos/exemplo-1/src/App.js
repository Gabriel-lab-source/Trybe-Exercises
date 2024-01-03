import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <button
        type="button"
        onClick={ this.handleClick }
      >
        { numeroDeCliques }
      </button>
    );
  }
}

export default App;