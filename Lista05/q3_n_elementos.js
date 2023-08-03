const indef = x => typeof x === 'undefined'

const lista = [3,5,-1,4,0]
const l2 = []
console.log(`número de elementos da lista: ${lista.length}`)

const tamanho = ([x, ...xs]) => {
  if (indef(x))
    return 0
  else if ([...xs] === [])
    return 1
  else
    return 1 + tamanho(xs)
}

console.log(tamanho(lista))