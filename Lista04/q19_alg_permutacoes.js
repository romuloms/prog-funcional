const nDigitosPermut = (n) => {
  const nDigitos = (n) => {
    const str = n.toString()
    const pos = str.search(/\+/)
    if(pos > -1) {
      return 1 + parseInt(str.slice(pos))
    }
    else if(n<10) {
      return 1
    }
    else {
      return 1 + nDigitos(parseInt(n/10))
    }
  }
  const fatorial = (n) => n===0 ? 1 : n*fatorial(n-1)

  return nDigitos(fatorial(n))
}

console.log(nDigitosPermut(123))