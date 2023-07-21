const log = (x) => console.log(x)

const mdc = (n) => (m) => {
  if(n == m) return n
  else if(n < m) return mdc(m)(n)
  else if(n > m) return mdc(n-m)(m)
  
}

log(mdc(12)(8))

const mdc3 = (n) => (m) => (k) => mdc(k)(mdc(n)(m))

log(mdc3(12)(8)(16))