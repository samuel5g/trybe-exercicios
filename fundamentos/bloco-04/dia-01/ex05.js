const a = 50;
const b = 60;
const c = 70;

let status = true;

if (a < 0 || b < 0 || c < 0){
  status = "ERROR";
} else if(a + b + c != 180){
  status = false;
} else if(a + b + c == 180){
  status = true;
}

console.log(status);