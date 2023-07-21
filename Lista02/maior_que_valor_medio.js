function fmedia( x, y, z ) {
  return (x+y+z)/3
}

function maiorQueValorMedio( a, b ) {
  if( a>b ) return 1
  else return 0
}

const x = 2
const y = 2
const z = 2
const media = fmedia( x, y, z )
const total = maiorQueValorMedio(x, media) + maiorQueValorMedio(y, media) + maiorQueValorMedio(z, media)

console.log(`Quantos maiores que a média entre ${x}, ${y} e ${z}? \nResp: ${total}`)