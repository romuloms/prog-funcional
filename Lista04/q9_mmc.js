const log = (x) => console.log(x)

const mdc = (n, m) => {
  if(n == m) return n
  else if(n < m) return mdc(m, n)
  else if(n > m) return mdc(n-m, m)
  
}

const mmc = (a, b) => (a*b)/mdc(a, b)

log(mmc(7, 50))