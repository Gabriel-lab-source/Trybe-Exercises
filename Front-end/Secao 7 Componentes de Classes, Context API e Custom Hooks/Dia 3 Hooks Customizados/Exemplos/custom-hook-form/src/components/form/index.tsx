import Swal from 'sweetalert2';
import './form.css';
import useFormInput from '../../hooks/useFormInput';

function Form({ toggle }: { toggle: () => void }) {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

  function resetForm() {
    firstName.handleChange('');
    lastName.handleChange('');
    email.handleChange('');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (firstName.inputValue && lastName.inputValue && email.inputValue) {
      Swal.fire(
        'Formulário enviado',
        JSON.stringify({
          firstName: firstName.inputValue,
          lastName: lastName.inputValue,
          email: email.inputValue,
        }),
        'success'
      );
      resetForm();
      toggle()
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você precisa preencher todos os campos.',
      });
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input value={firstName.inputValue} onChange={({ target }) => firstName.handleChange(target.value)} />
        </label>
        <label>
          Last name:
          <input value={lastName.inputValue} onChange={({ target }) => lastName.handleChange(target.value)} />
        </label>
        <label>
          E-mail:
          <input value={email.inputValue} onChange={({ target }) => email.handleChange(target.value)} />
        </label>
        <button>Submeter formulário</button>
      </form>
    </div>
  );
}

export default Form;
