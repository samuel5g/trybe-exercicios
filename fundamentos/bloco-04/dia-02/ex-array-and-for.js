let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let n of numbers){
//   console.log(n);
// }



// let soma = 0;
// for(let n = 0; n < numbers.length; n += 1){
//   soma += numbers[n]
// }
// console.log(soma);



// let soma = 0;
// let media = 0;
// for(let n = 0; n < numbers.length; n += 1){
//   soma += numbers[n]
// }
// media = soma / numbers.length
// console.log(media);



// let soma = 0;
// let media = 0;
// for(let n = 0; n < numbers.length; n += 1){
//   soma += numbers[n]
// }
// media = soma / numbers.length

// if(media > 20){
//   console.log("Media maior que 20");
// } else {
//   console.log("Valor menor que 20");
// }
// console.log(media);


// maior = 0;
// for(let i = 0; i < numbers.length; i += 1){
//   if(numbers[i] > maior){
//     maior = numbers[i]
//   }
// }
// console.log(maior);



// let qtdImpar = 0;
// for(let i = 0; i < numbers.length; i += 1){
//   if(numbers[i] % 2 != 0){
//     qtdImpar += 1;
//   }
// }

// if(qtdImpar == 0){
//   console.log("Não existe valor impar");
// } else {
//   console.log(`Existem ${qtdImpar} valores ímpares`);
// }



// menor = numbers[0];
// for(let i = 0; i < numbers.length; i += 1){
//   if(numbers[i] < menor){
//     menor = numbers[i]
//   }
// }
// console.log(menor);



// let myArray = [];

// for(let index = 1; index <= 25; index += 1){
//   myArray.push(index);
// }

// console.log(myArray);



let myArray = [];

for(let index = 1; index <= 25; index += 1){
  myArray.push(index);
}

for(let value = 0; value < myArray.length; value += 1){
  console.log(`O valor ${myArray[value]} dividido por 2 é ${myArray[value]/2}`);
}
