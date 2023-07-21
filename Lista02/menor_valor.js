function menorValor( a, b ) {
  if( a<b )
    return a
  else return b
}

const valores = menorValor( 0, menorValor( 9, -3 ) )

console.log( valores )