import React from 'react';
import Loading from './Loading';

class App extends React.Component {
  state = {
    count: 1,
    isLoading: true,
    dogImageUrl: '',
  };

  componentDidUpdate() {
    console.log('Componente atualizado.');
  }

  componentDidMount() {
    console.log('Componente montado.');
    this.handleFetch();
  }

  handleFetch = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    this.setState({ isLoading: false, dogImageUrl: data.message });
  };

  render() {
    const { isLoading, dogImageUrl } = this.state;

    if (isLoading) return <Loading />;
    return (
      <div className="App">
        <h1>Random Dog</h1>
        <img src={dogImageUrl} />
      </div>
    );
  }
}

export default App;
