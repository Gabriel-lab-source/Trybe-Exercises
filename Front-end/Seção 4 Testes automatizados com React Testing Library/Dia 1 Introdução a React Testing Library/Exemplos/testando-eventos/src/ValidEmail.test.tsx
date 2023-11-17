import ValidEmail from "./components/ValidEmail";
import { render, screen } from '@testing-library/react';

test('Testando o componente ValidEmail, caso o email passado seja válido', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);

  const isValid = screen.getByText(/Email Válido/i);
  expect(isValid).toBeInTheDocument();
});
test('Testa o componente ValidEmail, caso o email passado seja inválido', () => {
  const EMAIL_USER = 'email@emailcom';
  render(<ValidEmail email={ EMAIL_USER } />);

  const isInvalid = screen.getByText(/Email Inválido/i);
  expect(isInvalid).toBeInTheDocument();
})