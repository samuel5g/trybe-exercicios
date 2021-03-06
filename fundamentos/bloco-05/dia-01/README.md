# Dia 1 :rocket:
Aprendi sobre o DOMa estrutura que faz a ponte entre o _HTML_ e o _JavaScript_ e que permite interação entre os dois.
## Matéria :book:
Fui capaz de acessar dados do _HTML_ com o _Javascript_ através dos seletores do DOM

## Exercícios :man_technologist:

Para começar a praticar, copie para um arquivo em sua máquina o exemplo abaixo.

```html
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```

Agora você! Faça o seguinte:

1.  Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
2.  Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
3.  Por fim, recupere o subtítulo e altere-o também.
------
Utilizando o mesmo template de exercício anterior:

4.  Adicione uma classe igual para os dois parágrafos.
5.  Recupere os seus parágrafos via código  _JavaScript_ , usando a função  `getElementsByClassName`  ;
6.  Altere algum estilo do primeiro deles.
7.  Recupere o subtítulo e altere a cor dele usando a função  `getElementsByTagName`  .
------
É hora de aplicar seus conhecimentos em manipular os elementos do  `HTML`  !

1.  A seguir, você verá um trecho de código  `HTML e CSS`  .
2.  Crie um arquivo  `HTML`  dentro do diretório  `exercises/javascript-dom-eventos-e-web-storage_1`  e copie o código a seguir.
3.  Leia as instruções que estão dentro de um comentário na tag  `<script>`  .
4.  Não se esqueça de fazer um  `commit`  a cada exercício!

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício 5.1</title>
    
    <style>
      main, section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <header> 
      <h1 class="title">Exercício 5.1 - JavaEscripito </h1>
    </header>    
    <main class="main-content">
      <section class="center-content">
        <p>Texto padrão do nosso site</p>
        <p>-----</p>
        <p>Trybe</p>
      </section>
    </main>
    <script>
        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
    </script>
  </body>
</html>
```