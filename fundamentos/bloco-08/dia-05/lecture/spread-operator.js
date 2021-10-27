// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Pêra', 'Morango', 'Uva', 'Melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Creme de Leite', 'Acúcar', 'Chocolate'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const mistura = [...fruit, ...additional];
  return mistura;
};

console.log(fruitSalad(specialFruit, additionalItens));