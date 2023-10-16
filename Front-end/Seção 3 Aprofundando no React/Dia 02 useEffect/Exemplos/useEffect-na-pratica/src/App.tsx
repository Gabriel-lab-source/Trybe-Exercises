import { useEffect, useState } from 'react';
import { fetchCoordinates } from './services';

type Coordinates = {
  latitude: number,
  longitude: number
}

export default function App() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    console.log('Primeira linha da função fetchData, ou seja, o componente montou');
    const data = await fetchCoordinates();
    setCoordinates({
      latitude: data.latitude,
      longitude: data.longitude,
    });
    console.log('Atualização de estado ocorreu acima, setando as coordenadas');
    setLoading(false);
    console.log('Segunda atualização de estado aconteceu, setando o loading para falso');
  }
  
  useEffect(() => {

    const intervalId = setInterval(() => {
      console.log('Hook use effect foi chamado e em seguida ele executará a função fetchData, uma função assíncrona que retorna os dados da API');
      fetchData();
    }, 3000);

    return () => { // Essa é a função cleanup
      clearInterval(intervalId);
    };
    
  }, []);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      {
        coordinates && (
          <>
            <h2>{`Latitude: ${coordinates.latitude}`}</h2>
            <h2>{`Longitude: ${coordinates.longitude}`}</h2>
          </>
        )
      }
    </>
  );
}