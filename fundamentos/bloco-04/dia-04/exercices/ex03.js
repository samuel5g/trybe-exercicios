function returnIndexLesser(array){
  menor = array[0];
  for(let i = 0; i < array.length; i += 1){
    if(array[i] < menor){
      menor = array[i];
    }
  }

  console.log(array.indexOf(menor));
}

returnIndexLesser([2, 4, 6, 7, 10, 0, -3]);