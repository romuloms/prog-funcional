const log = (x) => console.log(x)

const soma = (num) => (num===0) ? 0 : 
  num + soma(num-1)

log(soma(5))