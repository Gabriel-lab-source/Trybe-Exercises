import React, { useState } from 'react';
import AddressForm from './components/AddressForm';
import PersonalForm from './components/PersonalForm';
import ProfessionalForm from './components/ProfessionalForm';
import ShowForm from './components/ShowForm';
import { FormStateType } from './types';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: 'Acre',
  addressType: 'Casa',
  resume: '',
  role: '',
  roleDescription: '',
} as FormStateType;

type ChangeEventType = React
  .ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export default function App() {
  const [formInfo, setFormInfo] = useState(INITIAL_STATE);
  const [alertWasDisplayed, setAlertWasDisplayed] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleMouseEnter = () => {
    if (!alertWasDisplayed) {
      alert('Preencha com cuidado esta informação.');
      setAlertWasDisplayed(true);
    }
  };

  function handleChange(e: ChangeEventType) {
    const { name, value } = e.target;
    const newValue = name === 'address' ? value.replace(/[^\w\s]/g, '') : value;

    if (name === 'name') {
      setFormInfo({
        ...formInfo, [name]: newValue.toUpperCase(),
      });
    } else {
      setFormInfo({
        ...formInfo, [name]: newValue,
      });
    }
  }

  const handleBlur = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = target;

    if (name === 'city' && /^\d/.test(value)) {
      setFormInfo({
        ...formInfo, [name]: '',
      });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(true);
  }

  function handleClearBtn() {
    setShowForm(true);
    setFormInfo(INITIAL_STATE);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <PersonalForm
        onChange={ handleChange }
        formState={ formInfo }
      />
      <AddressForm
        onChange={ handleChange }
        onBlur={ handleBlur }
        formState={ formInfo }
      />
      <ProfessionalForm
        onChange={ handleChange }
        handleMouseEnter={ handleMouseEnter }
        formState={ formInfo }
      />
      <button
        type="submit"
      >
        Enviar
      </button>
      <button
        type="button"
        onClick={ handleClearBtn }
      >
        Limpar

      </button>
      {
        showForm && <ShowForm formState={ formInfo } />
      }
    </form>
  );
}
