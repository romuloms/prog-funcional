const permuta = n => (n==0) ? 1 : n*permuta(n-1)

const algarismos = f => f.toString().length

console.log(algarismos(permuta(5)))