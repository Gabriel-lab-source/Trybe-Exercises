import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <main>
        <Greeting name="Gabriel" lastName="Amirati" />
      </main>
    );
  }
}

export default App;