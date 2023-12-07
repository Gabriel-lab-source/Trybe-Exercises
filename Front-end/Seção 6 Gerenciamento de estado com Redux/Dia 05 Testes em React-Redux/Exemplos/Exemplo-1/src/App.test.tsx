import { screen } from '@testing-library/react';
import renderWithRedux from './utils/renderWithRedux';
import App from './App';

describe('Testa a aplicação', () => {

  test('A página deve renderizar dois botões e o número "0"', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryAllByRole('button');
  
    expect(buttonAdicionar.length).toBe(2);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
    const state = {
      counterReducer: {
        count: 10,
      },
    };
    renderWithRedux(<App />, state);
  
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('Testa se o clique dos botões incrementa corretamente o valor do estado global', async () => {
    const { user, store } = renderWithRedux(<App />);

    const addOne = screen.getByRole('button', { name: 'Incrementa 1'});
    expect(addOne).toBeInTheDocument();
    const addFive = screen.getByRole('button', { name: 'Incrementa 5'});
    expect(addFive).toBeInTheDocument();

    await user.click(addOne);
    expect(store.getState().counterReducer.count).toEqual(1);
    await user.click(addFive);
    expect(store.getState().counterReducer.count).toEqual(6);
  });

  test('Altera o valor inicial do estado global count para 5 e testa se os botões incrementam corretamente o valor do estado global.', async () => {
    const INITIAL_STATE = {
      counterReducer: {
        count: 5,
      }
    }
    const { user, store } = renderWithRedux(<App />, INITIAL_STATE);

    const addOne = screen.getByRole('button', { name: 'Incrementa 1'});
    expect(addOne).toBeInTheDocument();
    const addFive = screen.getByRole('button', { name: 'Incrementa 5'});
    expect(addFive).toBeInTheDocument();

    await user.click(addOne);
    expect(store.getState().counterReducer.count).toEqual(6);
    await user.click(addFive);
    expect(store.getState().counterReducer.count).toEqual(11);
  });
})