import { screen } from '@testing-library/react';
import { renderWithRouter } from './utils/renderWithRouter';
import App from './App';

it('Renderiza página inicial', () => {
  renderWithRouter(<App />);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
})
it('Navega para a página About', async () => {
  const { user } = renderWithRouter(<App />);

  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /Sobre/i });
  await user.click(aboutLink);
  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();
});
it('Renderiza diretamente na rota /about', async () => {
  const { user } = renderWithRouter(<App />, { route: '/about' });

  expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /Início/i });
  await user.click(homeLink);
  expect(screen.getByText(/Você está na página Início/i)).toBeInTheDocument();
});
it('Testa rota not found', () => {
  renderWithRouter(<App />, { route: '/something-else' });

  expect(screen.getByText(/Página não encontrada/i)).toBeInTheDocument();
});
