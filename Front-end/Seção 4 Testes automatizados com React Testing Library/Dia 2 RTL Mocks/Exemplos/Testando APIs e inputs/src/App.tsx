import React, { useState, useEffect } from 'react';
import fetchJoke from './utils/fetchJoke.ts';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function getJoke() {
      const jokes = await fetchJoke();
      console.log(jokes);
      setJoke(jokes.joke)
    }
    getJoke();
  }, []);

  async function handleClick() {
    const jokes = await fetchJoke();
    setJoke(jokes.joke);
  }

  return (
    <div className="App">
      <p>{joke}</p>
      <button
        onClick={ handleClick }
        >New Joke
      </button>
    </div>
  );
}

export default App;