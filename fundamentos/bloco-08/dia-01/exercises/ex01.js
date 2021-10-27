const newEmployees = () => {
  const employees = {
    id1: data('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas

    id2: data('Luiza Drummond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas

    id3: data('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const data = (fullName) => {
  return person = {fullName, 
    email:`${fullName.split(' ')[0].toLowerCase()}@trybe.com`,
  };
}

console.log(newEmployees());