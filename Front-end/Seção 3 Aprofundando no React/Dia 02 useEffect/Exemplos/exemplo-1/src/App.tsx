import { useEffect, useState } from "react";
import fetchAPICoordinates from "./services";

type Coordinates = {
  latitude: number,
  longitude: number,
}

export default function App() {
  const [position, setPosition] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAPICoordinates();
      setPosition({ latitude: data.latitude, longitude: data.longitude })
      setLoading(false);
    }
    const intervalId = setInterval(() => fetchData(), 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [])

  return (
    <>
      <h1>International Space Station Location Tracker</h1>
      {
        loading ? (<h2>Loading</h2>) : (
          <>
            <h2>{`Latitude: ${position?.latitude}`}</h2>
            <h2>{`Longitude: ${position?.longitude}`}</h2>
          </>
        )
      }
    </>
  );
}
