function fAreaElipse( x, y ) {
  const pi = 3.1415
  return pi*x*y
}

function fAreaRetangulo( x, y ) { 
  return x*y
}

function fSoma( x, y) {
  return x + y
}

const l1 = 6.1
const l2 = 4.4
const r1 = 3.0
const r2 = 5.3

const a1 = fAreaRetangulo( l1, l2 )
const a2 = fAreaElipse( r1, r2 )

resultado = fSoma( a1, a2 )

console.log( "area do retangulo: ", a1, "area da elipse: ", a2 )
console.log( `soma das áreas: ${resultado}` )

console.log( "aplicando as funcoes diretamente no console.log: " )
console.log( fSoma( fAreaRetangulo( 3.0, 4.0 ), fAreaElipse(5.0, 6.0 ) ) )


function fAreaCirculo( raio, pi2 = 3.14 ) {
  return pi2*raio
}

console.log( fAreaCirculo( 2 ) )

// alternativa para texto nas mensagens
const textoRetangulo = `retângulo de lados ${l1} e ${l2}`
const textoElipse = `elipse de raios ${r1} e ${r2}`
const textoArea = `A soma das areas de um ${textoRetangulo} e de uma ${textoElipse} é igual a ${resultado}`

console.log( textoArea )