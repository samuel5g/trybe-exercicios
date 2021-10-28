import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const resultadoFinal = conteudos.map((conteudo) => {
  return (
    `O conteúdo é: ${conteudo.conteudo}

    Status: ${conteudo.status}

    Bloco: ${conteudo.bloco}`
  );
});

class Content extends React.Component {
  render() {
    return (
      <p>{resultadoFinal}</p>
    );
  }
}

export default Content;