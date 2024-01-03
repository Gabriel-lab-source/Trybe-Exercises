function PastResults() {
  const results = [
    {
      id: 1035,
      year: 2008,
      numbers: [1, 11, 26, 51, 59, 60],
      prize: 'R$ 37.025.110,94',
    },
    {
      id: 1140,
      year: 2009,
      numbers: [10, 27, 40, 46, 49, 58],
      prize: 'R$ 144.901.494,92',
    },
    {
      id: 1245,
      year: 2010,
      numbers: [2, 10, 34, 37, 43, 50],
      prize: 'R$ 194.395.200,04',
    },
  ];

  return (
    results.map((resultado) => (
      <article key={resultado.id}>
        <h3>Ano do jogo: {resultado.year}</h3>
        <p> Valor da premiação: {resultado.prize}</p>
        <h3>Numeros sorteados: </h3>
        <ul>
          {resultado.numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </article>
    ))
  )
}

export default PastResults;
