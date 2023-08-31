type PropNumbers = {
  numbers: number[]
}

export default function LottoNumbers({numbers}: PropNumbers) {
  return(
    <div>
      <h3>Os números sorteados são:</h3>
      <ul>
        { numbers.length >= 6 ? numbers.map((number, index) => (
        <li key={ index }>{ number }</li>
        )): 'Erro: a lista não contém 6 números'}
      </ul>
    </div>
  );
}