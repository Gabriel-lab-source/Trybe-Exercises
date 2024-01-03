import { useState } from "react";

export default function App() {
  const [nameInput, setnameInput] = useState('');

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="name">
            Nome: 
          </label>
          <input
            id="name"
              
              // Perceba que a função anônima recebe o objeto event como parâmetro. Esse é o comportamento padrão: todas as funções que criarmos como handler de algum evento recebem-no como parâmetro. Dele, vamos recuperar a chave target, que possui as informações do elemento em que ocorreu o evento.

              //Tudo que for digitado no input será armazenado no estado (onChange={({ target }) => setName(target.value)});

              // O valor do input será o valor armazenado no estado name (value={name}).

              // Como o valor do input é o estado name, quando você clicar no botão o valor do input será apagado.

            onChange={ (event) => setnameInput(event.target.value) }

              // Para vincular o valor do input ao estado, atribua o estado name ao atributo value do input. Se não fizer isso, quando você clicar no botão "Apagar", o estado nameInput da aplicação é limpo, entretanto, o valor do input não é alterado e, se seguirmos digitando no input, o estado recupera tudo que já estava digitado. Isso acontece porque não estamos controlando nosso componente - o valor do input não está vinculado ao estado name.

              // Para resolvermos esse problema, precisamos dar o controle total do input ao React. De forma prática, devemos informar ao React que o valor do input deve ser o estado name.

            value={ nameInput }

              // Para testar, remova a função handler do onChange e tente digitar algo no input. Você não vai conseguir, pois dessa forma, ao digitar no input, ele não irá mais alterar o valor do estado name, impossibilitando a alteração de seu valor.

          />
          <h1>
            Olá, { nameInput }!
          </h1>
          <button 
            onClick={ () => setnameInput('')}
            >Apagar
          </button>
        </fieldset>
      </form>
    </div>
  );
}