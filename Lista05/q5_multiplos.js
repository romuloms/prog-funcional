const ateMil = Array.from(Array(1000).keys())

const multiplos5 = ateMil.filter((x) => x%5 == 0 && x<1000)
const somaMultiplos5 = multiplos5.reduce((total, valores) =>
  total + valores, 0)

console.log(`Soma dos múltiplos de 5 menores que 1000: ${somaMultiplos5}`)

const multiplos3 = ateMil.filter((x) => x%3 == 0 && x<1000)
const somaMultiplos3 = multiplos3.reduce((total, valores) =>
  total + valores, 0)

console.log(`Soma dos múltiplos de 3 menores que 1000: ${somaMultiplos3} \n`)

console.log(`Soma dos resultados anteriores: ${somaMultiplos3 + somaMultiplos5}`)


const multiplos35 = ateMil.filter((x) => x%5 == 0 || x%3 == 0)
const somaMultiplos35 = multiplos35.reduce((total, valores) =>
  total + valores, 0)

  console.log(`Soma dos múltiplos de 3 e 5 menores que 1000: ${somaMultiplos35} \n`)