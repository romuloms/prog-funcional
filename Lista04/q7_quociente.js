const log = (x) => console.log(x)

const quociente = (n, d) => (n<d) ? 0 : 
  1 + quociente(n-d, d)

log(quociente(31, 7))