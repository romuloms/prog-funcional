const log = (x) => console.log(x)

const potencia = (num) => (num===0) ? 1 :
  2 * potencia(num-1)

log(potencia(7))