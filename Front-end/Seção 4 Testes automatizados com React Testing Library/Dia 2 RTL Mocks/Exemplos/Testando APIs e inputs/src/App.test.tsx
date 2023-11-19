import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest';
import App from './App';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetch a joke', async () => {
    const MOCK_JOKE = {
      id: '7h3oGtrOfxc',
      joke: 'Thanks for explaining the word "many" to me. It means a lot.',
    };
    
    const MOCK_RESPONSE = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE,
    } as Response;
    
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);

    render(<App />);
    const renderedJoke = await screen.findByText('Thanks for explaining the word "many" to me. It means a lot.');
    expect(renderedJoke).toBeInTheDocument();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });

    const MOCK_JOKE_2 = {
      id: 'kOfaUvP7Muc',
      joke: 'What did the Dorito farmer say to the other Dorito farmer? Cool Ranch!'
    }

    const MOCK_RESPONSE_2 = {
      ok: true,
      status: 200,
      json: async () => MOCK_JOKE_2,
    } as Response;

    const mockSecondFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE_2);

    const newJokeBtn = screen.getByRole('button', { name: 'New Joke' });
    await userEvent.click(newJokeBtn);

    const renderedSecondJoke = await screen.findByText('What did the Dorito farmer say to the other Dorito farmer? Cool Ranch!');
    expect(renderedSecondJoke).toBeInTheDocument();
    expect(mockSecondFetch).toHaveBeenCalledTimes(1);  
  });
})