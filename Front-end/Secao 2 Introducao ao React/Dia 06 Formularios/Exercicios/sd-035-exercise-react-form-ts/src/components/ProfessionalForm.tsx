import { FormStateType } from '../types';

type ProfessionalFormProps = {
  formState: FormStateType,
  onChange: React.ChangeEventHandler
  handleMouseEnter: React.MouseEventHandler<HTMLInputElement>
};

export default function ProfessionalForm(
  { formState, onChange, handleMouseEnter }: ProfessionalFormProps,
) {
  const { resume, role, roleDescription } = formState;
  return (
    <fieldset>
      <legend>Dados profissionais</legend>
      <label htmlFor="resumo">Resumo do currículo</label>
      <textarea
        required
        id="resumo"
        name="resume"
        onChange={ onChange }
        value={ resume }
        maxLength={ 1000 }
        cols={ 50 }
        rows={ 25 }
      />
      <label htmlFor="cargo">Cargo</label>
      <input
        required
        id="cargo"
        name="role"
        onChange={ onChange }
        value={ role }
        maxLength={ 40 }
        type="text"
        onMouseEnter={ handleMouseEnter }
      />
      <label htmlFor="descricaoDoCargo">Descrição do cargo</label>
      <textarea
        required
        id="descricaoDoCargo"
        name="roleDescription"
        onChange={ onChange }
        value={ roleDescription }
        maxLength={ 500 }
        cols={ 25 }
        rows={ 10 }
      />
    </fieldset>
  );
}
