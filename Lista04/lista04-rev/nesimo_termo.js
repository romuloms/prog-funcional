const nEsimo = (num) => (num===1) ? 3 : nEsimo(num-1)*2

console.log(nEsimo(6))