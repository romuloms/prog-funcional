const qntosIguais = ( a, b ) => {
  if (a == b) return 1
  else return 0
}

const x = 2
const y = 3
const z = 2

const resultado = qntosIguais(x, y) + qntosIguais(x, z) + qntosIguais(y, z)

console.log(resultado)
