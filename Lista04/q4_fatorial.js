const log = (x) => console.log(x)

const fatorial = (num) => (num===0) ? 1 :
  num * fatorial(num-1)

log(fatorial(4))