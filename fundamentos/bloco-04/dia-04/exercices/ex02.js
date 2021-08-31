function returnIndexBigger(array){
  let maior = 0;
  for(let i = 0; i < array.length; i += 1){
    if(array[i] > maior){
      maior = array[i];
    }
  }
  console.log(array.indexOf(maior));
}


returnIndexBigger([2, 3, 6, 7, 10, 1]);