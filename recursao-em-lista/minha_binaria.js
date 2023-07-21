function buscaBinaria(lista, item) {
  let baixo = 0
  let alto = lista.length - 1

  while (baixo <= alto) {
    let meio = Math.floor((baixo + alto)/2)
    let chute = lista[meio]

    if (chute == item) return meio

    else if (chute > item) {
      alto = meio - 1
    }

    else {
      baixo = meio + 1
    }
  }

  return -1
}

const list = [-4,0,3,7,11,15]

console.log(buscaBinaria(list, 11))
