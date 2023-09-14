import React, { Component } from 'react'

export default class ContactInfo extends Component {
  render() {
    const { phone, handleChange } = this.props;
    return (
      <div>
        <label htmlFor='phoneNumber'>Insira um número de contato: 
        <input id='phoneNumber' type='tel' placeholder='19995507450' minLength={ 11 } maxLength={ 14 } name='telNumber' value={ phone } onChange={ handleChange } />
        { phone.length < 10 || phone.length > 11 ? '  O número de telefone deve conter no mínimo 10 e no máximo 11 caracteres' : ''}
        </label>
      </div>
    )
  }
}
