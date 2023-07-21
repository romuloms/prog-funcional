const potencia = (exp) => (base) => base**exp

const quadrado = potencia(2)
const cubo = potencia(3)
const quarta = potencia(4)
const inverso = potencia(-1)

console.log(quadrado(3))
console.log(quarta(3))
console.log(inverso(-3))