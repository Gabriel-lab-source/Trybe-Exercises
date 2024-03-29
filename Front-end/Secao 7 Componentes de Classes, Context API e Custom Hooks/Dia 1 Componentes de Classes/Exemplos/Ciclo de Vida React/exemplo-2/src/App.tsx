import React from "react";
import RandomNumber from './RandomNumber'
import './App.css';

type AppState = {
  showRandomNumber: boolean,
}

class App extends React.Component <object, AppState > {
  state = {
    showRandomNumber: false,
  }

  componentDidMount() {
    console.log('Montou App');
  }

  handleClick = () => {
    this.setState((prevState) => ({ showRandomNumber: !prevState.showRandomNumber }));
  }

  render() {
    const { showRandomNumber } = this.state;
    return (
      <>
        <button
          onClick={ this.handleClick }
        >
          { showRandomNumber ? "hide" : "show" }
        </button>
        {showRandomNumber
          ? (<RandomNumber max={ 10 } />)
          : (<h1>?</h1>)
        }
      </>
    );
  }
}

export default App;