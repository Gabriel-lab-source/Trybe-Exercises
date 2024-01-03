function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
  console.log(d2);
  // Só me retorna d2 quando o valor de d1 é extritamente igual a d2
}
