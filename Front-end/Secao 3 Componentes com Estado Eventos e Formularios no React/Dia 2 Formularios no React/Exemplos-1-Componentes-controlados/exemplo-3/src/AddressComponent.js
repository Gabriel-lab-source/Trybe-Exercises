import React, { Component } from 'react'

export default class AddressComponent extends Component {
  render() {
    const { handleChange, address } = this.props;
    return (
      <div>
        <label htmlFor='AddressInput'>Insira o endereço de entrega: </label>
        <input type='text' id='AddressInput' value={ address } onChange={ handleChange } name='addressInput' />
        { !address ? '  O endereço deve ser preenchido' : '' }
      </div>
    )
  }
}
