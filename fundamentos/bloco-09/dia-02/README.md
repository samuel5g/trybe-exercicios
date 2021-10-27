# Dia 2 :rocket:

## Matéria :book:
-   Utilizar  _then()_ e  _catch()_ ;
    
-   Utilizar  _async await_ ;
    
-   Fazer integrações com  _APIs_ de terceiros.
## Exercícios :man_technologist:

### Lecture
#### API
Crie um arquivo  `index.html`  e adicione o seguinte código:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <header>
    <h1>Importância do JSON</h1>
  </header>
  <main>
    <article>
      <h2>O JSON é utilizado por empresas como:</h2>
      <ul id="corporations-used-by"></ul>
    </article>
    <article>
      <h2>As vantagens de se usar JSON são:</h2>
      <ul id="advantages"></ul>
    </article>
    <article>
      <h2>Esse formato também pode ser lido pelas seguintes linguagens:</h2>
      <ul id="languages-used-by"></ul>
    </article>
  </main>
  <script type="module" src="script.js"></script>
</body>
</html>
```

Também crie um arquivo  `script.js`  e adicione a lógica a seguir:

```javascript
const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerText = empresa;
  corporationsList.appendChild(newLi);
});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = vantagens;
  advantagesList.appendChild(newLi);
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = linguagens;
  languagesList.appendChild(newLi);
});
```
#### Fetch API
Antes de você ir para o código, como você vai rodar o código direto no Node e não no browser, será necessário instalar o  `node-fetch`  . Execute o comando abaixo caso você ainda não tenha o  `package.json`  :

```bash
npm init -y
```

depois, instale o  `node-fetch`  :

```bash
npm i node-fetch@^2
```

Note que foi utilizado o  `@^2`  ao final do nome do pacote para especificar que deve ser instalado a versão mais atual, mas que não seja maior que a  **2** . Essa especificação ocorre visto que a versão  **3** do  `node-fetch`  foi alterada para ser usada através de módulos do JS, podendo ser importada apenas através do  `import`  e não mais do  `require`  .

Agora crie um arquivo  `fetch.js`  e insira o código abaixo para testar sua funcionalidade:

```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke();
```

Ao rodar esse código você vai perceber que no console foi impresso  `Promise { <pending> }`  ao invés da piada. Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado.

Agora vamos corrigir esse problema:

```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();
```

Ao rodar o código acima recebemos um elogio sobre o Chuck Norris em nosso console. Bacana né?!

Aqui demonstramos 2 coisas importantes sobre a sintaxe do  `.then()`  :

1.  Passamos como argumento uma função. Essa função também recebe 1 argumento que é a resposta do  `fetch`  .
    
2.  O  `.then()`  é usado "em cadeia", um conceito chamado de  **_chaining_** . Assim, podemos colocar vários  `.then()`  em cadeia, e o argumento da função interna de um será o retorno do anterior. A parte mais importante é que o  `.then()`  espera a resposta do  `fetch`  (ou o  `.then()`  anterior) ser concluída para começar a sua execução. Assim, nosso fluxo está controlado!
    

Vamos ver o que acontece no código acima. A função  `fetchJoke`  chama o  `fetch`  que é executado e após sua execução, caso a requisição seja bem sucedida, retorna para o parâmetro da função do primeiro  `.then()`  uma resposta e na sua execução iremos pegar a versão  _JSON_ dessa resposta por meio da função  `.json()`  . Note que a função  `.json()`  também é assíncrona, por isso temos o segundo  `.then()`  que, por sua vez, vai pegar o  _JSON_ vindo do primeiro  `.then()`  e dentro dele acessar o  _elogio_ que esta armazenado no campo  `value`  para mostrar no console.

Ok, mas e ser der erro em alguma requisição? O que você pode fazer em relação a isso? Agora entra o  `.catch()`  ! Vamos adicioná-lo ao código:

```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported
```
Note que para forçar o erro retiramos o  `https://`  do início da  `url`  .

### Exercises
**1.** Como primeiro exercício, vamos usar a função  `fetch`  , que vimos na aula ao vivo, para criar um site simples com um  _gerador de piadas ruins!_ . Como? Vamos praticar!

-   Primeiro, veja o  [manual da  _API_ do site icanhazdadjoke.com](https://icanhazdadjoke.com/api) . Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa  _API_ :
    
    -   Para começar, vamos fazer uma requisição via browser. Visite o site  [icanhazdadjoke.com](https://icanhazdadjoke.com/api) , e perceba que ele devolve uma página  _HTML_ com uma piada aleatória.
    -   Em seguida, no terminal, vamos fazer a requisição:  `curl -H "Accept: text/html" "https://icanhazdadjoke.com/"`  . Perceba que o retorno é um  _HTML_ idêntico ao de uma requisição via browser com uma piada aleatória.
    -   Para a próxima requisição, vamos usar o comando:  `curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"`  . Veja que agora recebemos apenas a piada aleatória em formato texto.
    -   Por fim, faça a requisição:  `curl -H "Accept: application/json" "https://icanhazdadjoke.com/"`  . Agora a  _API_ retorna um objeto no formato JSON. Perceba que, dependendo do que passamos na chave  `Accept:`  no header, definido por  `-H`  no comando, o serviço nos retorna uma resposta diferente.
-   Utilize o  _HTML_ e o  `js`  a seguir como base:  _(não se esqueça de utilizar a extensão  **Live Server** e inspecionar o console do navegador para ver os logs)_
    

```html
<!-- jokes.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
    <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```javascript
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

-   Agora vamos tentar fazer as requisições a  _API_ usando  `fetch`  . Essa função recebe dois parâmetros:
    
    1.  O endereço para o qual a requisição será feita, ou seja, a url do serviço.
    2.  Um objeto contendo as especificações da requisição. Para essa  _API_ , atribuiremos a esse objeto as chaves  `method`  e  `headers`

```javascript
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject);
};

window.onload = () => fetchJoke();
```

O segundo parâmetro  `myObject`  define o tipo de request:  `method: 'GET'`  e o formato da resposta  `headers: { 'Accept': 'application/json' }`  , como visto nas requisições via  `curl`  .

-   A função  `fetch`  **é uma  _Promise_** (você não precisa entender o que é uma  _Promise_ agora, considere apenas como sendo algo assíncrono) e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas  `.then`  (em caso de sucesso) e  `.catch`  (em caso de falha). A requisição  `fetch`  retorna um objeto  _Response_ . Utilizando  `.then`  , verifique a estrutura da resposta usando um  `console.log`  na  `response`  retornada pelo  `fetch`  .

```javascript
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => console.log(response));
};

window.onload = () => fetchJoke();
```

-   Viu a response? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?

Para isso, usamos o método  `.json()`  na resposta da  _API_ . Esse método converte o conteúdo do  `body`  da  _Response_ e retorna uma outra  _Promise_ , que, quando bem-sucedida, retorna um  _JSON_ contendo as informações da piada.

A partir do  `fetch`  , troque o  `console.log()`  anterior pelo método  `.json()`  e imprima os dados da requisição.

```javascript
// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
```

-   Recebemos um objeto, certo? A partir daí, faça a piada aparecer no  _DOM_ da sua página!

**2.** Agora que tal um exercício menos guiado? Vamos consultar uma API que fornece os valores de crypto moedas e mostar as 10 primeiras.

A documentação para a API que vamos utilizar esta disponível nesse  [link](https://docs.coincap.io/) .

Tente descobrir qual url vamos utilizar para buscar as informações que precisamos (um  `array`  com uma listagem das crypto moedas).

Se ficou na dúvida veja a seguir  **_(spoiler alert!)_**

```
url: `https://api.coincap.io/v2/assets`
```

Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro:  `FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0`  , significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.

1.  Agora que temos a url vamos criar um arquivo (  `api.js`  , por exemplo) e dentro dele uma função para pegar o  `array`  com as moedas.
2.  Crie também um arquivo HTML (  `index.html`  , por exemplo) que deve conter uma tag para listar as crypto moedas.
3.  Pronto, temos um  `array`  com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas aparecam na tela. Utilize o seguinte formato:  `Nome da moeda (símbolo da moeda): valor em dólares`  . Exemplo:  `Bitcoin (BTC): 46785.06`  .
4.  Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o  `array`  das moedas para mostrar apenas as 10 primeiras?
5.  Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).