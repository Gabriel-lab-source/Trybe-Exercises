import React, { Component } from 'react'
import AddressComponent from './AddressComponent';
import ContactInfo from './ContactInfo';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectFood: '',
      ingredientsInput: '',
      checkboxInput: false,
      addressInput: '',
      telNumber: '',
      incompleteForm: true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    const { selectFood, ingredientsInput, checkboxInput, addressInput, telNumber } = this.state;

    const errorCases = [ !selectFood.length, !ingredientsInput.length, !checkboxInput, !addressInput.length, !telNumber.length ];

    const formComplete = errorCases.every((errCase) => errCase !== true);

    this.setState({
      incompleteForm: !formComplete
    });
  };

  handleInputChange ({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    }, this.handleError);
  }

  render() {

    const { selectFood, ingredientsInput, checkboxInput, addressInput, telNumber, incompleteForm } = this.state;

    return (

      <form>

        <label htmlFor='favFood'>Escolha a comida que mais gosta: </label>

        <select name='selectFood' id='favFood' value={ selectFood } onChange={ this.handleInputChange }>

          <option value=''>-- Escolha --</option>
          <option value='pizza'>Pizza</option>
          <option value='yakisoba'>Yakisoba</option>
          <option value='sushi'>Sushi</option>
          <option value='temaki'>Temaki</option>
        </select><br/><br/>

        <label htmlFor='ingredients'>Com qual sabor e/ou quais ingredientes você deseja? </label><br/><br/>

        <textarea id='ingredients' rows='5' cols='30' value={ ingredientsInput } onChange={ this.handleInputChange } name='ingredientsInput'></textarea><br/><br/>

        <label htmlFor='cutlery'>Deseja hachis e molho shoyo?</label>

        <input id='cutlery' type='checkbox' value={ checkboxInput } onChange={ this.handleInputChange } name='checkboxInput' /><br/><br/>

        <AddressComponent handleChange={ this.handleInputChange } address={ addressInput } /><br/>

        <ContactInfo phone={ telNumber } handleChange={ this.handleInputChange } /><br/>
        
        { incompleteForm ? (<span style={{ color: 'red' }}>Preencha todos os campos</span>) : (<span style={{ color: 'green' }}>Todos campos foram preenchidos</span>)}
      </form>
    )
  }
}
