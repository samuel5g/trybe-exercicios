let peca = "torr".toLowerCase();

switch (peca) {
  case "peao":
    console.log("Duas a frente");
    break;

  case "rei":
    console.log("Uma casa em todas as direções");
    break;

  case "rainha":
    console.log("Todas as casas em todas as direções");
    break;

  case "cavalo":
    console.log("Em L");
    break;

  case "bispo":
    console.log("Diagonais");
    break;

  case "torre":
    console.log("Todas as casas em cruz");
    break;

  default:
    console.log("Peça inválida");
    break;
}
