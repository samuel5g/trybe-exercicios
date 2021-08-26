const valor = -1;

if(valor == 0){
  console.log("É 0");
} else if(valor != Math.abs(valor)) {
  console.log("É negativo");
} else if(valor == Math.abs(valor)){
  console.log("É positivo");
}