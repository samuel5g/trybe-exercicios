# Dia 1 :rocket:
Início do bloco 
## Matéria :book:
-   Criar formulários em  **_HTML_** com as  **tags** :  `input`  ,  `button`  ,  `textarea`  ,  `select`  ,  `form`  .

## Exercícios :man_technologist:
### Lecture
#### Parte II - Para Fixar

Vamos praticar um pouco, criando uma tela de login? 🔥

**1 -** Adicione os campos de entrada para email e senha.

**2 -** Adicione um checkbox com o texto  _Lembre-me_ .

**3 -** Adicione um botão com o texto  _Entrar_ .

**4 -** Adicione os placeholder  _Digite seu email_ e  _Digite sua senha_ para os campos de email e senha.

**5 -** Adicione o atributo  `required`  para os campos de email e senha.

**6 -** Adicione o atributo  `autocomplete="off"`  para o campo de email.

**7 -** Adicione o atributo  `autofocus`  para o campo de email.


### Exercises
### Criando um formulário de currículo.

-   Crie um arquivo  **_HTML_** chamado  `form.html`  para o formulário.
    
-   Caso julgue necessário, crie estilos  **_CSS_** para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo  `styles.css`  .
    
-   Crie também um arquivo  `script.js`  para seu código  **_JavaScript_** .
    

Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:

_Faça as validações inicialmente pelo HTML_

1.  Crie um  `<fieldset>`  para os seguintes dados pessoais:
    
    -   Nome - Texto
        -   Limite de 40 caracteres
        -   Campo obrigatório
    -   Email - Texto
        -   Limite de 50 caracteres
        -   Campo obrigatório
    -   CPF - Texto
        -   Limite de 11 caracteres
        -   Campo obrigatório
    -   Endereço - Texto
        -   Limite de 200 caracteres
        -   Campo obrigatório
    -   Cidade - Texto
        -   Limite de 28 caracteres
        -   Campo obrigatório
    -   Estado - Select
        -   Todos os estados do Brasil
        -   Utilize estruturas de repetição via  **_JavaScript_** para gerar os  `<option>`
        -   Campo obrigatório
    -   Tipo - Radio Button
        -   Casa, Apartamento
        -   Campo obrigatório
2.  Crie outro  `<fieldset>`  para dados do seu último emprego
    
    -   Resumo do currículo - TextArea
        -   Limite de 1000 caracteres
        -   Campo obrigatório
    -   Cargo - Texto
        -   Limite de 40 caracteres
        -   Campo obrigatório
    -   Descrição do cargo - Texto
        -   Limite de 500 caracteres
        -   Campo obrigatório
    -   Data de início - Texto
        -   Verificar o formato da data  `dd/mm/aaaa`  .
        -   O dia deve ser > 0 e <= 31.
        -   O mês deve ser > 0 e <= 12.
        -   O ano não pode ser negativo.
        -   Caso alguma das condições seja inválida no momento do envio do formulário, exibir via  `alert`  uma mensagem de erro contextualizada.
        -   Campo obrigatório
3.  Logo abaixo do formulário, crie um botão que:
    
    -   Chame uma função  **_JavaScript_** e interrompa o fluxo automático do form utilizando o  [preventDefault()](https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault) .  _Note que isso vai impedir as validações do HTML ao fazer o submit_
    -   Implemente, agora,  **no Javascript** , as validações que foram pedidas ao longo da montagem do formulário.
    -   Caso todos os dados sejam válidos, monte uma  `<div>`  com o consolidado dos dados que foram inseridos no formulário.
    -   Caso haja algum dado inválido, mostre em uma  `<div>`  uma mensagem de erro. Se o erro for na  _Data de Início_ , a mensagem deve ser contextualizada.
4.  Crie um botão  `Limpar`  que limpa todos os campos do formulário e a  `<div>`  com seu currículo também.
    

----------