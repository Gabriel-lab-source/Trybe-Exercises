import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PersonalForm extends Component {
  render() {
    const { handleChange, formState } = this.props;
    const { name, email, cpf } = formState;
    return (
      <fieldset>
        <legend>
          Insira seus dados abaixo
        </legend>
        <label
          htmlFor="name"
        >
          Nome
          <input
            type="text"
            id="name"
            name="name"
            maxLength={ 40 }
            placeholder="Gabriel Amirati"
            value={ name }
            onChange={ handleChange }
          />
        </label>

        <label
          htmlFor="email"
        >
          Email
          <input
            type="email"
            id="email"
            name="email"
            maxLength={ 50 }
            placeholder="gabriel_amirati@hotmail.com"
            value={ email }
            onChange={ handleChange }
          />
        </label>

        <label
          htmlFor="cpf"
        >
          CPF
          <input
            type="text"
            id="cpf"
            name="cpf"
            maxLength={ 11 }
            placeholder="02735684514"
            value={ cpf }
            onChange={ handleChange }
          />
        </label>

      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
