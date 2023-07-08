import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pictureURL: '',
      loading: true,
    };
    this.fetchImage = this.fetchImage.bind(this);
  }

  componentDidMount() {
    this.fetchImage();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.pictureURL.includes('terrier');
  }

  componentDidUpdate() {
    const { pictureURL } = this.state;
    localStorage.setItem('URL', JSON.stringify(pictureURL));
    const dogBreed = pictureURL.split('/')[4];
    alert(dogBreed);
  }

  async fetchImage() {
    const URL = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({
      pictureURL: data.message,
      loading: false,
    });
  }

  render() {
    const { pictureURL, loading } = this.state;
    if (loading) {
      return <span>Loading...</span>;
    }

    return (
      <div>
        <h1>Doguinhos</h1>
        <div>
          <img src={ pictureURL } alt="Doguinho aleatório" />
        </div>
        <button type="button" onClick={ this.fetchImage }>Novo doguinho!</button>
      </div>
    );
  }
}

export default App;
