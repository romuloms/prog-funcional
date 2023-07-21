const quociente = (n, m) => (n<m) ? 0 : 1 + quociente(n-m, m)

console.log(quociente(31, 7))