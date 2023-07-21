const somaQuadrados = (n) => (n==1) ? 1 : n**2 + somaQuadrados(n-1)

console.log(somaQuadrados(4))