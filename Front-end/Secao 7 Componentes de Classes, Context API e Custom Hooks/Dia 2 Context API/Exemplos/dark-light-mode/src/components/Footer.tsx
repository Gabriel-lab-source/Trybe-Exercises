import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Footer() {
  const themeContext = useContext(ThemeContext);
  return <footer>Tema Atual: {themeContext.theme}</footer>;
}

export default Footer;
