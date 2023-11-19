import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <NavLink to="/">Início</NavLink>
        <br />
        <NavLink to="/about">Sobre</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
