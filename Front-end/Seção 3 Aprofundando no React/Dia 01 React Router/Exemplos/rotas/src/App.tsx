import { Route, Routes } from 'react-router-dom';
import Coffee from './pages/coffee/coffee';
import CoffeeList from './pages/coffeList/coffeeList';
import Home from './pages/home/home';
import NotFound from './pages/not-found';
import Layout from './components/layout';

export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element={ <Home /> } />
            <Route path="/coffees" element={ <CoffeeList /> } />
            <Route path="/coffees/:coffee" element={ <Coffee /> } />
          </Route>
          <Route path="/*" element={ <NotFound /> } />
        </Routes>
    </>
  )
}
