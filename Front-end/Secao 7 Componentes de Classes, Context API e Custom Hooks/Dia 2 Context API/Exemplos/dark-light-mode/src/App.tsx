import { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './style.css';

export default function App() {
  const { theme } = useContext(ThemeContext)
  return (
      <div className={`app ${theme}`}>
        <Header />
        <Image />
        <Footer />
      </div>
  );
}
