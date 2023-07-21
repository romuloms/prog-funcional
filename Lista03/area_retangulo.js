// const fAreaRetangulo = ( base, altura ) => base*altura

// const base = 4.0
// const altura = 5.0
// const medidas = fAreaRetangulo( base, altura )

// console.log(`A área do retângulo de base ${base} e altura ${altura} é ${medidas}`)

const areaRetangulo = (base) => (altura) => base*altura

const ret1 = areaRetangulo(3)(4)
const ret2 = areaRetangulo(3)(5)
const ret3 = areaRetangulo(3)(6)

console.log(ret1)
console.log(ret2)
console.log(ret3)