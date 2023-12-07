import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import App from './App';
import mockFetch from './__mocks__/mockFetch';
import renderWithRedux from './helpers/renderWithRedux';
import randomNumber from './utils/randomNumber';

vi.mock('./utils/randomNumber');

describe('Página principal', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockImplementation(mockFetch as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('1 - Verifica se o botão de "Próximo Pokémon" está presente na tela', async () => {
    renderWithRedux(<App />);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(1);

    const buttonEl = await screen.findByRole('button');

    expect(buttonEl).toBeInTheDocument();
  });

  test('2 - Verifica se foi feita uma requisição à API após carregar a página', async () => {
    const firstPokemonId = 656;
    const firstEndpoint = 'https://pokeapi.co/api/v2/pokemon/656/';

    (randomNumber as any).mockReturnValue(firstPokemonId);

    renderWithRedux(<App />);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndpoint);
  });

  test('3 - Verifica se o endpoint da requisição é alterado ao clicar no botão', async () => {
    const firstPokemonId = 656;
    const firstEndpoint = 'https://pokeapi.co/api/v2/pokemon/656/';
    const secondPokemonId = 96;
    const secondEndpoint = 'https://pokeapi.co/api/v2/pokemon/96/';

    (randomNumber as any).mockReturnValueOnce(firstPokemonId);
    (randomNumber as any).mockReturnValue(secondPokemonId);

    renderWithRedux(<App />);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(firstEndpoint);

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    const buttonEl = await screen.findByRole('button');

    userEvent.click(buttonEl);

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(secondEndpoint);
  });

  test('4 - Verifica se os elementos contendo as informações do Pokémon são renderizados', async () => {
    renderWithRedux(<App />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

    const pokemonName = screen.getByTestId('pokemon-name');

    const pokemonImage = screen.getByAltText('pokemon');

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
  });
});
