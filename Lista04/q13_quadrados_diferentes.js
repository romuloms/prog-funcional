const log = (x) => console.log(x)

const somaQuadrados = (num) => 
  (num===0) ? 0 : num**2 + somaQuadrados(num-1)

log(somaQuadrados(4))