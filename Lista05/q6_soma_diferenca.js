// const ateDez = Array.from(Array(11).keys())
const ateDez = [...Array(11).keys()]

const somaNormal = ateDez.reduce((total, valor) => total + valor, 0)

const quadradoSoma = somaNormal ** 2

const quadrados = ateDez.map((x) => x**2)

const somaQuadrados = quadrados.reduce((total, valor) => total + valor, 0)

const diferencaQuadSoma = quadradoSoma - somaQuadrados

console.log(diferencaQuadSoma)

