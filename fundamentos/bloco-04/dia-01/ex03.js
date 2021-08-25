const a = 50;
const b = 40;
const c = 30;
let maior = 0;

if(a > b && a > c){
  maior = a;
  console.log("A é maior");
} else if (b > a && b > c) {
  maior =  b;
  console.log("B é maior");
} else {
  maior = c;
  console.log("C é maior");
}

