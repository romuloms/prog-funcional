const lista = [1, 2, 3]
const arrayFinal = []

const repete = (num) => (vezes) => {
  if(vezes === 0) {
    return 0
  }
  else {
    return arrayFinal.push(num) + repete(num)(vezes-1) 
  }
}

lista.map((i) => repete(i)(4))

console.log(arrayFinal)