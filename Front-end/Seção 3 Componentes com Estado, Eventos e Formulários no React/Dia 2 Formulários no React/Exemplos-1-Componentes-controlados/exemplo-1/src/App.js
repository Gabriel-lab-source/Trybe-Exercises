import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectFood: 'Pizza',
      ingredientsTxtArea: '',
      checkboxInput: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange (e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {

    const { selectFood, ingredientsInput, checkboxInput } = this.state;

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

        <textarea id='ingredients' rows='5' cols='30' value={ ingredientsInput } onChange={ this.handleInputChange } name='ingredientsInput'></textarea> <br/><br/>

        <label htmlFor='cutlery'>Deseja hachis e molho shoyo?</label>

        <input id='cutlery' type='checkbox' value={ checkboxInput } onChange={ this.handleInputChange } name='checkboxInput' />
        
      </form>
    )
  }
}
