import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

const character = [
  {
    id: 1,
    name: 'Gabriel',
    source: 'Living Hell',
    defensePoints: 666,
  },
];

it('testa a requisição para a API', async () => {
  const fetchResolvedValue = {
    json: async () => character,
  } as Response;

  const mockedFetch = vi.spyOn(global, 'fetch').mockResolvedValue(fetchResolvedValue);

  render(<App />);
  const renderedCharacter = await screen.findByRole('heading', { name: 'Gabriel' });
  expect(renderedCharacter).toBeInTheDocument();
});
