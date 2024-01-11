import Form from './components/form';
import './App.css';
import useToggle from './hooks/useToggle';

function App() {
  const toggle = useToggle(false);

  return (
    toggle.value ? <Form toggle={ toggle.toggleValue } /> : 
      <button
        onClick={ toggle.toggleValue }
      >
        Show Form
      </button>
  );
}

export default App;
