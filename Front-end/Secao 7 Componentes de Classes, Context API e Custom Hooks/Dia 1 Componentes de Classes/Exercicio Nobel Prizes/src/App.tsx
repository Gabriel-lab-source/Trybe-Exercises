import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NobelPrize from './components/NobelPrize';

type NobelArrayItem = {
  categoryFullName: {
    en: string
  }
  dateAwarded: string;
  laureates: []
};

class App extends Component {
  state = {
    nobelArray: [],
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch = async () => {
    const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes');
    const data = await response.json();
    this.setState({ nobelArray: data.nobelPrizes });
  };

  render() {
    const { nobelArray } = this.state;
    return (
      <div className="App">
        Nobel Prizes
        <Header />
        {
          nobelArray.map((info: NobelArrayItem, index) => (
            <NobelPrize
              key={ index }
              category={ info.categoryFullName.en }
              date={ info.dateAwarded }
              laureates={ info.laureates }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
