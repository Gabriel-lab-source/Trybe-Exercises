import { useState } from "react";

export default function App() {

  // const [nameInput, setNameInput] = useState('');
  // const [passwordInput, setPasswordInput] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(true); 
  // const [emailInput, setEmailInput] = useState('');
  // const [schoolingSelect, setSchoolingSelect] = useState('');
  // const [resumeInput, setResumeInput] = useState('');
  // const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  const [formInfo, setFormInfo] = useState(
    {
      name: '',
      password: '',
      email: '',
      schooling: '',
      resume: '',
      terms: false,
    }
  )

  const resetFormInputs = () => {
    // setNameInput('');
    // setPasswordInput('');
    // setEmailInput('');
    // setSchoolingSelect('');
    // setResumeInput('');
    // setTerms(false);
    setFormInfo({
      name: '',
      password: '',
      email: '',
      schooling: '',
      resume: '',
      terms: false,
    })
  }

  // function handlePassword(event: string) {
  //   setPasswordInput(event);
  //   const regexForPassword = /^(?=.*?[0-9])/i;
  //   const testPassRegex = regexForPassword.test(event);
  //   setInvalidPassword(!testPassRegex)
  // }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, type, value, checked } = event.target;
    const valueType: string | boolean = type === 'checkbox' ? checked : value;
    if (name === 'password') {
      const regexForPassword = /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/gm
      const testPassRegex = regexForPassword.test(value);
      console.log(testPassRegex);
      setInvalidPassword(!testPassRegex)
    }

    setFormInfo({
    ...formInfo, 
    [name]: valueType,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!invalidPassword && formInfo.terms) {
      alert(
        `Nome: ${ formInfo.name }\n Senha: ${ formInfo.password }\n Email: ${ formInfo.email }\n Escolaridade: ${ formInfo.schooling }\n Experiências: ${ formInfo.resume } `
        );
        resetFormInputs();
      }
    else setError(true)
  }


  return (
    <>
      <form onSubmit={ (event) => handleSubmit(event) }>
        <label htmlFor="name">
          Nome
        </label>
        <input
          required
          id="name"
          name="name"
          // value={ nameInput }
          value={ formInfo.name }
          // onChange={ (event) => setNameInput(event.target.value) }
          onChange={ handleChange }
        />
        <label htmlFor="password">
          Senha
        </label>
        <input
          required
          id="password"
          name="password"
          // value={ passwordInput }
          value={ formInfo.password }
          // onChange={ (event) => handlePassword(event.target.value) }
          onChange={ handleChange }
        />
        <label htmlFor="email">
          E-mail
        </label>
        <input
          required
          id="email"
          name="email"
          // value={ emailInput }
          value={ formInfo.email }
          // onChange={ (event) => setEmailInput(event.target.value) }
          onChange={ handleChange }
        />
        <label htmlFor="education">
          Escolaridade
        </label>
        <select
          required
          id="education"
          name="schooling"
          // value={ schoolingSelect }
          value={ formInfo.schooling }
          // onChange={ (event) => setSchoolingSelect(event.target.value) }
          onChange={ handleChange }
        >
          <option disabled hidden value="" >Escolha sua escolaridade</option>
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>
        </select>
        <label htmlFor="experiences">
          Resumo das experiências
        </label>
        <textarea
          required
          id="experiences"
          name="resume"
          // value={ resumeInput }
          value={ formInfo.resume }
          // onChange={ (event) => setResumeInput(event.target.value) }
          onChange={ handleChange }
        />
        <label htmlFor="termsOfService">
          Aceito os termos e condições
        </label>
        <input
          id="termsOfService"
          type="checkbox"
          name="terms"
          // checked={ terms }
          checked={ formInfo.terms }
          // onChange={ () => setTerms(!terms) }
          onChange={ handleChange }
        />
        <button 
          type="submit"
          >Enviar
        </button>
      </form>
      {
        error && (
        <h3>
          Você precisa aceitar os termos e condições para poder enviar seu currículo
        </h3>
        )
      }
      {
        invalidPassword && (
          <h3>
            Você precisa inserir uma senha válida, com no mínimo uma letra e um número
          </h3>
        )
      }
    </>
  );
}