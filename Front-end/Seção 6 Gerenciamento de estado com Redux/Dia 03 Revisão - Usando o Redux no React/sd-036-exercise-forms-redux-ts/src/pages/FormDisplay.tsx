import { useSelector } from 'react-redux/es/hooks/useSelector';

type FormReducer = {
  formReducer: {
    name: string,
    email: string,
    cpf: string,
    address: string,
    city: string,
    uf: string,
    resume: string,
    role: string,
    description: string,
  }
};

function FormDisplay() {
  const { name, email, cpf, address, city, uf,
    resume, role, description } = useSelector((state: FormReducer) => state.formReducer);
  return (
    <section>
      <h1>Dados Enviados</h1>
      <div>
        Nome:
        { ' ' }
        { name }
      </div>
      <div>
        Email:
        { ' ' }
        { email }
      </div>
      <div>
        CPF:
        { ' ' }
        { cpf }
      </div>
      <div>
        Endereço:
        { ' ' }
        { address }
      </div>
      <div>
        Cidade:
        { ' ' }
        { city }
      </div>
      <div>
        Estado:
        { ' ' }
        { uf }
      </div>
      <div>
        Currículo:
        { ' ' }
        { resume }
      </div>
      <div>
        Cargo:
        { ' ' }
        { role }
      </div>
      <div>
        Descrição do cargo:
        { ' ' }
        { description }
      </div>
    </section>
  );
}

export default FormDisplay;
