type PlanetCardProps = {
  planetName: string,
  planetImage: string,
};

export default function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{ planetName }</p>
      <img src={ planetImage } alt={ planetName } />
    </div>
  );
}
