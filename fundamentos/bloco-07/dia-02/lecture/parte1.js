// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const createObjects  = (objeto, chave, valor) => {
  objeto = new Object();
  objeto[chave] = valor
  return objeto; 
}

console.log(createObjects('human', 'name', 'samuel'));
