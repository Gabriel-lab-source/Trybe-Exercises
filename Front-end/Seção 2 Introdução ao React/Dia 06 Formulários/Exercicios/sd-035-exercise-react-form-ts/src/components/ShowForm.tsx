import { FormStateType } from '../types';

type ShowFormProps = {
  formState: FormStateType,
};

export default function ShowForm({ formState }: ShowFormProps) {
  const { name, email, cpf, address,
    city, countryState, addressType, resume, role, roleDescription } = formState;
  return (
    <div>
      <ul>
        <li>
          { name }
        </li>
        <li>
          { email }
        </li>
        <li>
          { cpf }
        </li>
        <li>
          { address }
        </li>
        <li>
          { city }
        </li>
        <li>
          { countryState }
        </li>
        <li>
          { addressType }
        </li>
        <li>
          { resume }
        </li>
        <li>
          { role }
        </li>
        <li>
          { roleDescription }
        </li>
      </ul>
    </div>
  );
}
