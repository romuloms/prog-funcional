const velocidade = ( s, t, s0=500, t0=0) => ( (s-s0)/(t-t0) )

const s = 2000
const t = 30

console.log(`v = ${velocidade(s, t)}m/s`)