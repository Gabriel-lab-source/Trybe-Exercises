import React from 'react';
import PersonalForm from './components/PersonalForm';
import AddressForm from './components/AddressForm';
import ProfessionalForm from './components/ProfessionalForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: '',
        email: '',
        cpf: '',
      },
      address: {
        endereco: '',
        cidade: '',
        estado: '',
        residencia: '',
      },
      resume: {
        curriculo: '',
        cargo: '',
        descricaoDoCargo: '',
      },
      alertWasDisplayed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
  }

  handleChange({ target: { value, name } }) {
    let newValue = value;

    if (name === 'name') {
      newValue = value.toUpperCase();
    }

    if (name === 'endereco') {
      newValue = value.replace(/[`¨´!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/g, '');
    }

    this.setState((previousState) => ({
      personal: { ...previousState.personal,
        [name]: newValue,
      },
      address: { ...previousState.address,
        [name]: newValue,
      },
      resume: { ...previousState.resume,
        [name]: newValue,
      },
    }));
  }

  handleBlur({ target: { name, value } }) {
    if (name === 'cidade' && /^\d/.test(value)) {
      this.setState({
        address: {
          [name]: '',
        },
      });
    }
  }

  onMouseEnterHandler() {
    const { alertWasDisplayed } = this.state;
    if (!alertWasDisplayed) {
      global.alert('Preencha com cuidado esta informação.');
      this.setState({ resume: {
        alertWasDisplayed: true,
      } });
    }
  }

  render() {
    const { personal, address, resume } = this.state;
    return (
      <form>
        <PersonalForm
          formState={ personal }
          handleChange={ this.handleChange }
        />
        <AddressForm
          addressData={ address }
          handleChange={ this.handleChange }
          handleBlur={ this.handleBlur }
        />
        <ProfessionalForm
          resume={ resume }
          handleChange={ this.handleChange }
          handleMouseEnter={ this.onMouseEnterHandler }
        />
      </form>
    );
  }
}

export default App;
