const lista = [3,4,1,-2,0]
const posicao = (pos) => (x) => lista.indexOf(x)==(lista.length+pos)
const antepenultimo = posicao(-3)
const penultimo = posicao(-2)
const ultimo = posicao(-1)
const ultimoElem = lista.filter(ultimo)
const penultimoElem = lista.filter(penultimo)
const antepenultimoElem = lista.filter(antepenultimo)
console.log(ultimoElem)
console.log(penultimoElem)
console.log(antepenultimoElem)