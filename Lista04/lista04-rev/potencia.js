const potencia2 = (x, y=2) => (x===0) ? 1 : y * potencia2(x-1) 

console.log(potencia2(4))