let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

info.recorrente = "Sim";
// console.log(`Bem-vinda, ${info}.`);

// console.log(info);

// for(key in info){
//   console.log(key);
// }

// for(key in info){
//   console.log(info[key]);
// }

for(key in info){
  if(info.recorrente === info2.recorrente){
    delete info.recorrente;
    delete info2.recorrente;
    console.log(`${info[key]} e ${info2[key]}`);
  }
}
console.log("Ambos recorrentes");