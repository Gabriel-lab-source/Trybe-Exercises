import { FormStateType } from '../types';

type PersonalFormProps = {
  formState: FormStateType,
  onChange: React.ChangeEventHandler,
};

export default function PersonalForm({ formState, onChange }: PersonalFormProps) {
  const { name, email, cpf } = formState;

  return(
    <fieldset>
      <legend>Dados pessoais</legend>
      <label htmlFor="name">Nome</label>
      <input required autoFocus id="name" name="name" onChange={ onChange } value={ name } type="text" placeholder="Insira seu nome" maxLength={ 40 } />
      <label htmlFor="email">Email</label>
      <input required id="email" name="email" onChange={ onChange } value={ email } type="email" placeholder="Insira seu email" maxLength={ 50 } />
      <label htmlFor="cpf">CPF</label>
      <input required id="cpf" name="cpf" onChange={ onChange } value={ cpf } type="text" placeholder="Insira seu CPF (só números)" maxLength={ 11 } />
    </fieldset>
  );
}
