const repete = (vezes) => (str) => (vezes===0) ? "" : str+repete(vezes-1)(str)

const rep3 = repete(3)

console.log(rep3("alo"))