import states from '../countryStates';
import { FormStateType } from '../types';

type AddressFormProps = {
  formState: FormStateType,
  onChange: React.ChangeEventHandler,
  onBlur: React.FocusEventHandler
};

export default function AddressForm({
  formState, onChange, onBlur }: AddressFormProps) {
  const { address, city, countryState, addressType } = formState;
  return (
    <fieldset>
      <legend>Endereço</legend>
      <label htmlFor="address">Endereço</label>
      <input
        required
        id="address"
        name="address"
        onChange={ onChange }
        value={ address }
        type="text"
        placeholder="Insira o nome da rua, bairro e número"
        maxLength={ 200 }
      />
      <label htmlFor="city">Cidade</label>
      <input
        required
        id="city"
        name="city"
        onChange={ onChange }
        onBlur={ onBlur }
        value={ city }
        type="text"
        placeholder="Insira o nome de sua cidade"
        maxLength={ 28 }
      />
      <label htmlFor="state">Estado</label>
      <select
        required
        id="state"
        name="countryState"
        onChange={ onChange }
        value={ countryState }
      >
        {/* <option disabled hidden value="">Selecione seu estado</option> */}
        {
          states.map((state) => (
            <option key={ state } value={ state }>
              {' '}
              { state }
              {' '}
            </option>
          ))
        }
      </select>
      <label htmlFor="house">Casa</label>
      <input
        id="house"
        name="addressType"
        onChange={ onChange }
        value="Casa"
        type="radio"
        checked={ addressType === 'Casa' }
      />
      <label htmlFor="apart">Apartamento</label>
      <input
        id="apart"
        name="addressType"
        onChange={ onChange }
        value="Apartamento"
        type="radio"
        checked={ addressType === 'Apartamento' }
      />
    </fieldset>
  );
}
