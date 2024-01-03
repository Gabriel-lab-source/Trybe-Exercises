import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from '../redux/reducers/userReducer';
import { ReduxState } from '../pages/Profile';

function renderWithRouterAndRedux(
  component: JSX.Element,
  route: string = '/',
  state: ReduxState | undefined = undefined,
  store = createStore(userReducer, state)
) {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(
      <BrowserRouter>
        <Provider store={store}>{component}</Provider>
      </BrowserRouter>
    ),
    user: userEvent.setup(),
    store,
  };
}

export default renderWithRouterAndRedux;
