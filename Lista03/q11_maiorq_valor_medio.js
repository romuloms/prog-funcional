const media = ( x, y, z ) => (x+y+z)/3

const maiorQueMedia = ( a, b ) => (a>b)? 1 : 0

const x = 9
const y = 7
const z = 7
const valorMedia = media( x, y, z )
const total = maiorQueMedia(x, valorMedia) + maiorQueMedia(y, valorMedia) + maiorQueMedia(z, valorMedia)

console.log(`Quantos maiores que a média entre ${x}, ${y} e ${z}? \nResp: ${total}`)