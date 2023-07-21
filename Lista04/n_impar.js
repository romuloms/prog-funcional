const nImpar = (n) => (n===1) ? 1 : 
  nImpar(n-1) + 2

 console.log(nImpar(7))