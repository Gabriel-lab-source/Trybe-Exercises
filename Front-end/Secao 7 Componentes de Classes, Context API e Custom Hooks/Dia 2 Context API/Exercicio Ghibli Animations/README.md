# Boas-vindas ao repositório do exercício Ghibli Animations

Para realizar o exercício, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, envie-a por _Slack_! 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu exercício, utilizando uma _branch_ específica e um _pull request_ (PR) para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

Para entregar o seu exercício você deverá criar um _pull request_ neste repositório.

> **Relembrando 🧠**: Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>
  
  - Você trabalha como pessoa desenvolvedora Front-end no Studio Ghibli, um dos maiores estúdios de animação do Japão. A sua tarefa será criar uma aplicação que exibe as principais animações do [Studio Ghibli](https://studioghibli.com.br/studioghibli/), além de possibilitar a pessoa usuária a favoritar uma animação e renderizá-las na página de favoritos.

  - A pessoa usuária poderá favoritar os filmes que desejar, que poderão ser acessados em uma outra página.

    > 👀 Dica: a estrutura de páginas e as rotas da aplicação já estão prontas!

  - Para se inspirar, o Figma da aplicação está nesse [link.](https://www.figma.com/file/cqw5AHCVTEEsIGI7eNsAQY/%5BFRONT%5D-Exercise-Ghibli-Animations?node-id=0%3A1&t=0KTsRD18wbnb0tbl-1)


  - A API utilizada encontra-se [neste endpoint](https://api-trybe-frontend.vercel.app/api/ghibli-animations). Você pode acessá-la para verificar como os dados serão recebidos pela aplicação e como são os objetos retornados por ela.

  </details>
<br />

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

1. Clone o repositório

- Use o comando: `git clone git@github.com:tryber/sd-036-exercise-ghibli-animations-ts.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd sd-036-exercise-ghibli-animations-ts`

2. Instale as dependências

- `npm install`.

3. Crie uma branch a partir da branch `main`

- Verifique que você está na branch `main`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `main`
  - Exemplo: `git checkout main`
- Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
  - Exemplo: `git checkout -b joaozinho-sd-036-exercise-ghibli-animations-ts`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças não estão mais no _stage_
  - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin joaozinho-sd-036-exercise-ghibli-animations-ts`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-036-exercise-ghibli-animations-ts/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Coloque um título para a sua _Pull Request_
  - Exemplo: _"Cria tela de busca"_
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- **Não se preocupe em preencher mais nada por enquanto!**
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-036-exercise-ghibli-animations-ts/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-036`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

Para garantir a qualidade do código, vamos utilizar neste exercício os linters `ESLint` e `StyleLint`.
Assim o código estará alinhado com as boas práticas de desenvolvimento, sendo mais legível
e de fácil manutenção! Para rodá-los localmente, execute os comandos abaixo:

```bash
  npm run lint
  npm run lint:styles
```

⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.
ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022).

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

Para avaliar o exercício, iremos utilizar [React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro) na execução dos testes.


Para verificar a solução proposta, você pode efetuar todos os testes localmente, basta executar:

```bash
npm test
```

### Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é extensa. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste. Veja um exemplo:

```js
it.skip("Será validado se o campo de filtro por nome renderiza na tela", () => {
  render(<App />);
  const filterNameInput = screen.getByTestId(/name-filter/i);
  expect(filterNameInput).toBeInTheDocument();
});
```

![image](skip-image.png)

> Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

Como uma segunda proposta, você também pode rodar apenas um arquivo de teste, por exemplo:

```bash
npm test 
```

Outra forma para contornar esse problema é a utilização da função `.only` após o `it`. Com isso, será possível que apenas um requisito rode localmente e seja avaliado.

```js
it.only("Será validado se o campo de filtro por nome renderiza na tela", () => {
  render(<App />);
  const filterNameInput = screen.getByTestId(/name-filter/i);
  expect(filterNameInput).toBeInTheDocument();
});
```

![image](only-image.png)

⚠️ Atenção: **O avaliador automático não necessariamente avalia seu exercício na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o exercício!</strong></summary> <br />

  Ao finalizar e submeter o exercício, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

  [FORMULÁRIO DE AVALIAÇÃO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH36&template=betrybe/sd-0x-exercise-ghibli-animations-ts)

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse exercício no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>
<br />

# Requisitos

## 1 - Montando a estrutura

- Crie o `Context` dentro do arquivo `/src/context/FilmContext.tsx`;
- No componente `App`, utilize o Hook `useEffect` para fazer a chamada à API utilizando o endpoint `https://api-trybe-frontend.vercel.app/api/ghibli-animations`;
- Ainda no componente `App`, crie um estado que será o responsável por armazenar os dados retornados pela API.
- Com o Context criado, adicione o `FilmContext.Provider` no arquivo App.tsx, envolvendo todas as rotas.
- Adicione como valor do `Provider` o estado criado contendo os dados da API.

<details>
  <summary><strong>O que será verificado</strong></summary>

  - A API foi chamada com o endpoint corretamente - uma e apenas uma vez.
</details>

## 2 - Exibindo a lista de filmes na página `Home`

No arquivo `/src/pages/Home`

- Mantenha o titulo "Films"
- Liste os filmes recebidos pela API:
  - Liste o título (como h2), a imagem e a descrição de todos os filmes. A imagem deve ter a propriedade `alt` como sendo o título do filme.
  - Adicione um botão, em cada filme, que será responsável por favoritar ou desfavoritar a animação (a funcionalidade será implementada no próximo requisito).
- O componente `Header` deve ser renderizado nesta página;

💡 Dica: Utilize o Hook `useContext` para recuperar os valores armazenados no `Provider`.

<details>
  <summary><strong>O que será verificado</strong></summary>

  - Todos os títulos, imagens e botões são exibidos na página Home
</details>


## 3 - Exibindo a lista de filmes favoritados na página Favorites

- Crie a funcionalidade de favoritar/desfavoritar cada filme.
- Ao clicar no botão de favoritar, o filme deve ser adicionado à lista de filmes favoritos.
- Ao clicar no botão novamente, o filme deve ser removido da lista de filmes favoritos.
- Você **deve** armazenar os itens favoritos no `Context`.

- No arquivo `src/pages/Favorites.tsx`, liste todos os filmes favoritados na página Home;
- Na página de filmes favoritados, cada filme deve possuir um botão que, ao ser clicado, remove o filme da lista de filmes favoritos;
- O componente `Header` deve ser renderizado nesta página;

⚠️ Atenção: O mesmo filme não pode ser listado mais de uma vez na página de favoritos.

<details>
  <summary>
    <strong>O que será verificado</strong>
  </summary>

- Clicar no botão de favoritar faz com que aquele filme apareça também na página de favoritos.
- Clicar no botão de favoritar em um filme que está na lista de favoritos faz com que aquele filme saia da página de favoritos.
</details>


## 4 (Bônus) - Estilizando a página

- Faça o CSS de acordo com o [figma do projeto](https://www.figma.com/file/cqw5AHCVTEEsIGI7eNsAQY/%5BFRONT%5D-Exercise-Ghibli-Animations?node-id=0%3A1&t=0KTsRD18wbnb0tbl-1)