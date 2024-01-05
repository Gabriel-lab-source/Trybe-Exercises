import React from 'react';
import './App.css';

class Component extends React.Component {
  state = {
    course: 'front-end',
    finished: false,
  };

  render() {
    const { course, finished } = this.state;
    return (
      <div className="App">
        <h1>{`Módulo: ${course}`}</h1>
        <button
          disabled={finished}
          onClick={() => this.setState({ finished: true })}
        >
          Finalizar curso
        </button>
        {finished && <h2>Curso finalizado</h2>}
      </div>
    );
  }
}

export default Component;
