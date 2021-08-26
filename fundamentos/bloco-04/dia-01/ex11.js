let salBruto = 1215.80
let salLiquido = 0;
let salBase = 0;
let inss = 0;
let ir = 0;

//INSS
if(salBruto >= 5189.82){
  inss = 570.88;

} else if(salBruto >= 2594.93 && salBruto < 5189.82){
  inss = 0.11 * salBruto;

} else if(salBruto >= 1556.95 && salBruto < 2594.93){
  inss = 0.09 * salBruto;

} else {
  inss = 0.08 * salBruto;
}

salBase = salBruto - inss;

//IR
if(salBase >= 4664.68){
  ir = (0.275 * salBase) - 869.36;

} else if (salBase >= 3751.06 && salBase < 4664.68){
  ir = (0.225 * salBase) - 636.13;

} else if(salBase >= 2826.66 && salBase < 3751.06){
  ir = (0.15 * salBase) - 354.80;

} else if(salBase >= 1903.99 && salBase < 2826.66){
  ir = (0.075 * salBase) - 142.80;

} else {
  ir = 0;
}

salLiquido = salBase - ir;

console.log(`Seu salário líquido será de ${salLiquido}`);