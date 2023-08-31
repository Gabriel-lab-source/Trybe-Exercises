import Greeting from './components/Greetings';
import LottoNumbers from './components/LottoNumbers';
import LuckyNumbers from './components/LuckyNumbers';

function App() {
  return (
    <>
      <Greeting person={{ firstName: 'Chapolin', lastName: 'Colorado' }} />
      <LuckyNumbers />
      <LottoNumbers numbers={ [7, 12, 42, 30] } />
    </>
  );
}

export default App;
