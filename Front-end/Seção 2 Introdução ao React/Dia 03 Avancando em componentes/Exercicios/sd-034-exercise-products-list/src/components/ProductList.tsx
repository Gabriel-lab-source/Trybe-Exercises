export default function ProductsList({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Lista de produtos</h1>
      <ul>{ children }</ul>
    </main>
  );
}
