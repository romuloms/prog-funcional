const multiSoma = (num, cont=10) => (cont===1) ? num : 
  (num*cont) + multiSoma(num, cont-1) 

console.log(multiSoma(5))