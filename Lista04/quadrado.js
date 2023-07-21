const ret = (x) => (y) => x*y

const quad = (x) => ret(x)(x)

console.log(quad(2))

