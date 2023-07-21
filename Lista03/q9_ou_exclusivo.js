const ouExclusivo = (a) => (b) => (a || b) && !(a && b)

const valores = ouExclusivo(false)(true)

console.log(valores)