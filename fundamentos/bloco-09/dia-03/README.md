# Dia 3 :rocket:

## Matéria :book:
-   Escrever testes para códigos assíncronos utilizando  `async/await`  ;
    
-   Reaproveitar configurações para diversos testes por meio do uso de  `beforeEach`  e  `afterEach`  ;
    
-   Dividir as configurações dos seus testes, em blocos separados, por meio do uso de  `describe`  ;

## Exercícios :man_technologist:

### Lecture

### Exercises
**1** - O código abaixo busca no  _GitHub_ de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL  `'https://api.github.com/orgs/tryber/repos'`  , faça um teste que verifique que os repositórios  `'sd-01-week4-5-project-todo-list'`  e  `'sd-01-week4-5-project-meme-generator'`  se encontram nessa lista.

```javascript
// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
```

----------

**2** - Para este exercício, tente adivinhar a saída dos  `console.log`  dos testes abaixo sem executá-los, e veja se compreendeu bem o funcionamento do  `beforeEach`  e do  `afterEach`  .

```javascript
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
```

Após escrever o que imagina que será o resultado, execute os testes e veja se acertou.

----------

**3** - Agora você vai treinar um pouco mais testes assíncronos em Jest com os exercícios do  [repositório exercise-magic-card](https://github.com/tryber/exercise-magic-card) . Antes de começar, leia atentamente e siga os passos indicados no README para fazer o fork e clone do repositório.