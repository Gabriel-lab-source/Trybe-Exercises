import planets from '../data/planets';
import Missions from './Missions';
import PlanetCard from './PlanetCard';
import Title from './Title';

export default function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      { planets.map((planet) => (<PlanetCard
        key={ planet.name }
        planetName={ planet.name }
        planetImage={ planet.image }
      />)) }
      <Missions />
    </div>
  );
}
