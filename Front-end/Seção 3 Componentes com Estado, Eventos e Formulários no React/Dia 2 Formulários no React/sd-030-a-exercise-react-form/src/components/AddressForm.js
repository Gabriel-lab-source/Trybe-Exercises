import React, { Component } from 'react';
import PropTypes from 'prop-types';
import estados from '../countryStates';

export default class AddressForm extends Component {
  render() {
    const { addressData, handleChange, handleBlur } = this.props;
    const { endereco, cidade, estado, residencia } = addressData;
    return (
      <fieldset>
        <legend>
          Insira seu endereço
        </legend>
        <label
          htmlFor="endereço"
        >
          Endereço:
        </label>
        <input
          id="endereço"
          type="text"
          name="endereco"
          maxLength={ 200 }
          placeholder="Rua Barão de Jaguara, numero: 598, Cambuí"
          value={ endereco }
          onChange={ handleChange }
        />
        <label
          htmlFor="cidade"
        >
          Cidade:
        </label>
        <input
          id="cidade"
          type="text"
          name="cidade"
          maxLength={ 28 }
          placeholder="São Paulo"
          value={ cidade }
          onChange={ handleChange }
          onBlur={ handleBlur }
        />
        <label
          htmlFor="estado"
        >
          Estado:
        </label>
        <select
          id="estado"
          name="estado"
          value={ estado }
          onChange={ handleChange }
        >
          <option
            value="estado"
          >
            Estado
          </option>
          { estados.map((state, index) => (
            <option
              key={ index }
            >
              { state }
            </option>)) }
        </select>
        <br />
        <label
          htmlFor="house"
        >
          Casa
          <input
            id="house"
            type="radio"
            name="residencia"
            value="casa"
            checked={ residencia === 'casa' }
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="flat"
        >
          Apartamento
        </label>
        <input
          id="flat"
          type="radio"
          name="residencia"
          value="apartamento"
          checked={ residencia === 'apartamento' }
          onChange={ handleChange }
        />
      </fieldset>
    );
  }
}

AddressForm.propTypes = {
  endereco: PropTypes.string,
  cidade: PropTypes.string,
  estado: PropTypes.string,
  residencia: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
}.isRequired;
