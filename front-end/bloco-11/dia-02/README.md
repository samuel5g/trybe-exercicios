# Dia 1 :rocket:

## Matéria :book:
-   Criar formulários utilizando sintaxe  **_JSX_** com as  `tags`  :  `input`  ,  `textarea`  ,  `select`  ,  `form`  .
    
-   Transmitir informações de componentes filhos para componentes pais via  _callbacks_ .
## Exercícios :man_technologist:

### Lecture
**1 -** Crie um formulário com um campo  `select`  , dois  `inputs`  de tipo diferente, uma  `textarea`  e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo  _Estado_

**2 -** Baixe a  _React Developer Tools_ e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado.

**3 -** Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um  _event handler_ genérico para lidar com eles.

**4 -** Acrescente no seu formulário um  `input`  do tipo  `checkbox`  e garanta que seu  `event handler`  esteja tratando este caso corretamente.

**5 -** Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um  `input`  para  **arquivos** . Acrescente um ao seu formulário.

**6 -** Encapsule alguns dos seus campos num  `fieldset`  . Entenda como ele funciona lendo a  [documentação](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/fieldset) .

**7 -** Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.

**8 -** Faça duas validações em um desses componentes filhos e uma em um outro.

**9 -** Crie, no estado do componente pai, um campo  `formularioComErros`  que deve ser  `true`  caso algum desses componentes tenha erros e  `false`  caso contrário.

🦜  **Dica:** Se algum dos componentes transmitir  `true`  para a função que fará o  `handle`  dos erros, qual valor deve ser armazenado no  _Estado_ ?
### Exercises