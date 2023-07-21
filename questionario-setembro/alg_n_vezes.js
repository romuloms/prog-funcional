const range = (inicio, fim, step = 1) =>
  Array.from({ length: (fim - inicio) / step + 1 }, (_, i) => inicio + (i * step))

const repeticoes = (algarismo, inicio, fim) => {
  const array = range(inicio, fim)
  const juncao = array.reduce((acc, item) => acc + item, '')
  const isola = juncao.split('')
  const filtra = isola.filter(x => x == algarismo)
  const contagem = filtra.length

  return contagem
}

console.log(repeticoes(9, 0, 100))

