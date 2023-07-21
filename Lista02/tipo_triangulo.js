function isTriangulo( a, b, c ) {
  const somaAB = a+b 
  const somaAC = a+c
  const somaBC = b+c

  return ( somaAB > c && somaAC > b && somaBC > a )
}

function tipoTriangulo( a, b, c ) {
  const iguaisABC = a==b && b==c
  const diferentesABC = a!=b && a!=c && b!=c
  if(iguaisABC) return 'Equilátero'
  else if(diferentesABC) return 'Escaleno'
  else return 'Isósceles'
}

const a = 7
const b = 9
const c = 6


console.log( `Triângulo ${tipoTriangulo( a, b, c )}.` )
