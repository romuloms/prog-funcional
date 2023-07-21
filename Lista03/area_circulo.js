const fAreaCircunferencia = ( raio, pi=3.14 ) => pi*(raio**2)

const raio = 10.0
const area = fAreaCircunferencia(raio)
const textoArea = (`A área da circunferência de raio ${raio} é ${area}.`)

console.log(textoArea)