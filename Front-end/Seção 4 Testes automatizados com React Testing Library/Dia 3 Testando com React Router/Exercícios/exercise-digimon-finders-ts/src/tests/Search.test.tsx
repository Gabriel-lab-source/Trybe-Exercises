import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithRouter } from '../utils/renderWithRouter';
import App from '../App';

describe('Testa a busca por Digimon', async () => {
  afterEach(() => vi.clearAllMocks());

  test('É possível inserir um valor na caixa de busca', async () => {
    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByLabelText('Digimon:');
    await user.type(searchInput, 'Busca digimon');
    expect(searchInput).toHaveValue('Busca digimon');
  });
  test('A tela inicia sem nenhum Digimon renderizado. Para esse teste, você pode testar que o data-testid=digimonName não está na tela', () => {
    renderWithRouter(<App />);

    expect(screen.queryByTestId('digimonName')).not.toBeInTheDocument();
  });
  test('É possível buscar um Digimon com sucesso', async () => {
    const mockDigimon = [
      {
        name: 'Agumon',
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
        level: 'Rookie',
      },
    ];

    const fetchResolved = {
      json: async () => mockDigimon,
    } as Response;

    vi.spyOn(global, 'fetch').mockResolvedValue(fetchResolved);

    const { user } = renderWithRouter(<App />);

    expect(global.fetch).toBeCalledTimes(0);

    const searchInput = screen.getByLabelText('Digimon:');
    const searchBtn = screen.getByRole('button', { name: 'Search Digimon' });
    await user.type(searchInput, 'Agumon');
    await user.click(searchBtn);
    const digimonName = await screen.findByText('Agumon');
    expect(digimonName).toBeInTheDocument();
    const digimonLevel = await screen.findByText('Level: Rookie');
    expect(digimonLevel).toBeInTheDocument();
    const digimonImage = await screen.findByText('Agumon');
    expect(digimonImage).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon',
    );
  });
  test('A mensagem de erro é renderizada caso o Digimon buscado não exista', async () => {
    const ErrorMsg = 'Pikachu is not a Digimon in our database.';

    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    })) as any;

    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    const button = screen.getByRole('button', { name: /Search Digimon/i });

    await user.type(searchInput, 'Pikachu');
    await user.click(button);

    await screen.findByText('Pikachu is not a Digimon in our database.');

    expect(global.fetch).toBeCalledTimes(1);
  });
  test('A aplicação não realiza fetch caso a busca seja feita com o input vazio', async () => {
    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    await user.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });
});
