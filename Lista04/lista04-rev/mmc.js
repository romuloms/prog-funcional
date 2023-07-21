const mmc = (n, m) => (n*m)/mdc(n,m)

const mdc = (n, m) => {
  if(n>m) {
    return mdc(m, n)
  } else if(n===0) {
    return m
  } else {
    return mdc(n, m-n)
  }
}

console.log(mmc(12, 18))