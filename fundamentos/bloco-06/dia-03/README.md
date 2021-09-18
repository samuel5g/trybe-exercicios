# Dia 3 :rocket:
Aprendi sobre CSS Flexbox Layout ( _Flexible Box_ ). Flexbox é um módulo que visa fornecer uma maneira mais eficiente de organizar, alinhar e distribuir espaço entre os itens em um _container_ , mesmo quando seu tamanho é desconhecido.

## Matéria :book:

### Você será capaz de:
-   Utilizar  _CSS Flexbox_ para criar layouts flexíveis;
    
-   Utilizar  _CSS Flexbox_ para alterar o comportamento de  _containers_ .

## Exercícios :man_technologist:

### Lecture
#### Parte 1
Vamos colocar em prática os novos conhecimentos adquiridos? Copie o código abaixo e realize os exercícios de fixação propostos.
```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Flex Flow</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
    </div>
  </body>
</html>
```

**1 -** Teste as possibilidades (  `row`  ,  `column`  ,  `row-reverse`  e  `column-reverse`  ) para a propriedade  `flex-direction`  .

**2 -** Teste as possibilidades (  `wrap`  e  `nowrap`  ) para a propriedade  `flex-wrap`  .

**3 -** Teste as possibilidades para a propriedade  `flex-flow`  .

----------

#### Parte 2
Interessante quantas possibilidades para manipular o posicionamento de elementos o flex-box nos traz, não é? Copie o código abaixo e teste algumas destas possibilidades para fixar seu conhecimento.

**1 -** Utilizando o código abaixo, teste as possibilidades (  `center`  ,  `flex-start`  ,  `flex-end`  ,  `space-around`  e  `space-between`  ) para a propriedade  `justify-content`  .

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Justify Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 20%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
  </body>
</html>
```

**2 -** Teste as possibilidades (  `center`  ,  `flex-start`  ,  `flex-end`  ,  `stretch`  e  `baseline`  ) para a propriedade  `align-items`  . Não se esqueça de copiar o código abaixo! 😉

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Items</title>
    <style>
      .box-one {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 70px;
        min-height: 80px;
        margin: 10px 5px;
        text-align: center;
        width: 50px;
      }

      .box-two {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 50px;
      }

      .box-three {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 30px;
        margin: 10px 5px;
        min-height: 50px;
        text-align: center;
        width: 50px;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box-one">1</div>
      <div class="box-two">2</div>
      <div class="box-three">3</div>
    </div>
  </body>
</html>
```

**3 -** Teste as possibilidades (  `center`  ,  `flex-start`  ,  `flex-end`  ,  `stretch`  ,  `space-around`  e  `space-between`  ) para a propriedade  `align-content`  .

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        /* ADICIONE AQUI SEUS TESTES */
        background-color: #0fa36b;
        display: flex;
        flex-wrap: wrap;
        height: 600px;
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
      <div class="box">9</div>
    </div>
  </body>
</html>
```
----------

### Exercises
#### Exercício 1

-   Crie um cabeçalho para sua aplicação utilizando a tag  `header`. Este cabeçalho  **deve**  possuir 3 elementos e estes devem ser posicionados utilizando  **Flexbox**. O resultado deverá ser similar à estrutura da página "Trybe Tech-Gallery". Observe os exemplos abaixo:  [![Header Exemple](https://github.com/samuel5g/exercise-tech-gallery/raw/master/images/trybe-tech-gallery-header.jpeg)](https://github.com/samuel5g/exercise-tech-gallery/blob/master/images/trybe-tech-gallery-header.jpeg)

#### [](https://github.com/samuel5g/exercise-tech-gallery#exerc%C3%ADcio-2)Exercício 2

-   Implemente o conteúdo da primeira  `section`. Esta seção deverá conter no mínimo um elemento de texto. Utilizando  **Flexbox**, faça o posicionamento de acordo com o exemplo abaixo.  [![Text Sextion Exemple](https://github.com/samuel5g/exercise-tech-gallery/raw/master/images/trybe-tech-gallery-text.jpeg)](https://github.com/samuel5g/exercise-tech-gallery/blob/master/images/trybe-tech-gallery-text.jpeg)

#### [](https://github.com/samuel5g/exercise-tech-gallery#exerc%C3%ADcio-3)Exercício 3

-   Implemente o posicionamento da segunda  `section`. Esta seção deverá conter no mínimo 6 imagens e um título para cada uma delas. Sinta-se livre para usar a imaginação e selecionar as imagens que preferir, só não esqueça de seguir a estrutura de posicionamento proposta.  ![wink](https://github.githubassets.com/images/icons/emoji/unicode/1f609.png)  [![Gallery Cards Exemple](https://github.com/samuel5g/exercise-tech-gallery/raw/master/images/trybe-tech-gallery-cards.jpeg)](https://github.com/samuel5g/exercise-tech-gallery/blob/master/images/trybe-tech-gallery-cards.jpeg)

#### [](https://github.com/samuel5g/exercise-tech-gallery#exerc%C3%ADcio-4)Exercício 4

-   Por fim, faça o posicionamento do footer/rodapé, este é o ultimo elemento necessário para que nossa aplicação fique completa. O rodapé  **deverá**  conter no mínimo 2 elementos. Para o exemplo, foram adicionadas imagens que redirecionam o usuário para as redes sociais da Trybe.  [![Gallery Footer Exemple](https://github.com/samuel5g/exercise-tech-gallery/raw/master/images/trybe-tech-gallery-footer.jpeg)](https://github.com/samuel5g/exercise-tech-gallery/blob/master/images/trybe-tech-gallery-footer.jpeg)