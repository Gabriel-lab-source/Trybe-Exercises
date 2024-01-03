import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';

describe('Testa as rotas da aplicação', async () => {
  test('A página deverá apresenta o título "Search Digimon"', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('heading', { name: 'Search Digimon' })).toBeInTheDocument();
  });
  test('A página deverá apresentar os links "About" e "Search Digimon"', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: 'Search Digimon' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });
  test('Ao clicar no link About, a pessoa usuária é direcionada para a página About. Teste se o título "About" será renderizado na tela', async () => {
    const { user } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    await user.click(aboutLink);
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument();
  });
  test('Ao tentar acessar uma rota inexistente, a pessoa usuária é direcionada para a página Not Found. Teste se os elementos da página Not Found estarão presentes', () => {
    renderWithRouter(<App />, { route: '/ihatethis' });
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/A página que você está procurando não existe!/i)).toBeInTheDocument();
  });
});
