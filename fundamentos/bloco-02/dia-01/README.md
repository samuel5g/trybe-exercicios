# Primeiro dia na Trybe :rocket:
Aqui começa o meu "diário" sobre como me relaciono com a maneira da [Trybe](betrybe.com "Página Inicial da Trybe") 
ensinar seus alunos e sobre como desafiante isso pode ser! :rocket:

## Fomos capazes de:
-   Instalar e configurar o  **_Git_** no meu computador;
    
-   Salvar meus projetos no repositório  **_Git_** local;
    
-   Controlar as alterações e versões dos meus arquivos;
    
-   Enviar meus projetos para o repositório remoto do  **_GitHub_** .


## Exercícios
Os exercícios foram em maior parte para instalar e configurar o **_Git_**, criar a conta no _**GitHub_** e configurar nossa chave SSH no computador.

Para podermos simular um exercício feito, você criará um arquivo  `.txt`  com um nome de sua escolha (Exemplo:  `trybe-skills.txt`  ) e utilizará o conteúdo abaixo.

```txt
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```

No final, ao executar o comando  `ls -l`  na pasta de arquivos deste dia, você deverá receber um retorno parecido com:

```sh
ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```

Agora vamos transformar essa pasta em um repositório  **_Git_** :

-   Retorne para a raiz da pasta de exercícios;
    
-   Inicialize o repositório com  `git init`  ;
    
-   Crie um arquivo de  `README`  utilizando o comando  `touch README.md`  ;
    
-   Crie um  `commit`  inicial utilizando:

```sh
git add .
git commit -m "Initial commit"
```

-   Vá até o seu  _GitHub_ e  [crie um repositório público](https://help.github.com/en/github/getting-started-with-github/create-a-repo) , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
    
    -   Dê ao repositório um nome descritivo, como por exemplo  `trybe-exercicios`  ;
    -   ⚠️ Lembre-se de  **não** inicializar o repositório com um arquivo  `README.md`  , pois você já criou um nos passos anteriores! 😉
-   Clique no botão  **SSH** e então copie a  _URL_ do repositório;
    
    -   Execute o comando para adicionar a  _URL_ ao repositório local  `git remote add origin "URL_DO_REPOSITÓRIO"`  ;
-   Verifique se tudo está certo com sua  _URL_ remota utilizando o comando  `git remote -v`  . Seu terminal deve conter algo similar a isso:

```shell
origin  git@github.com:john-snow/know-nothing.git (fetch)
origin  git@github.com:john-snow/know-nothing.git (push)
```

-   Em que  `john-snow`  corresponde ao seu username e  `know-nothing`  ao nome que você deu ao seu repositório;
    
-   Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro  `commit`  para o  **_GitHub_** ! 🤩
    
-   Execute o comando  `git push origin master`  no terminal;
    
-   Vá até o seu GitHub e verifique as novas alterações.
    

Agora que tal adicionar uma descrição do que é seu repositório no  `README.md`  ? 💪🏼.

-   O  `README.md`  que você recriou é referente ao repositório  `trybe-exercicios`  , tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;
    
-   Uma outra coisa interessante a se fazer é adicionar um  `README.md`  dentro do  **diretório de exercícios do dia** para colocar a descrição dos exercícios que você desenvolveu;
    
-   Lembre-se de fazer um  _commit_ quando terminar de alterar os arquivos;
    
-   Depois do  _commit_ , faça sempre um  _push_ ;
    
-   Confira as alterações no  **GitHub** .
    

----------
