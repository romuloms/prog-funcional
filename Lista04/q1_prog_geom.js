const log = (x) => console.log(x)

const sequencia = (num) => (num==1) ? 3 : 
  sequencia(num-1)*2

log(sequencia(5))