function returnBiggerName(array){
  maior = '';
  for (let i = 0; i < array.length; i += 1){
    if(array[i].length > maior.length){
      maior = array[i];
    }
  }
  console.log(maior);
}

returnBiggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']); 