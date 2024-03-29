import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './context/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
