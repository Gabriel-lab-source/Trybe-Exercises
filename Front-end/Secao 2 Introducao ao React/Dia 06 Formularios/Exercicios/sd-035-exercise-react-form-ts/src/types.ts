import states from './countryStates';

export type FormStateType = {
  name: string,
  email: string,
  cpf: string,
  address: string,
  city: string,
  countryState: typeof states[number],
  addressType: 'Casa' | 'Apartamento',
  resume: string,
  role: string,
  roleDescription: string,
};
