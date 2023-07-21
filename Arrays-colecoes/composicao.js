const contagem = (lista) => lista.map((texto) => texto.length)
const triplo = (lista) => lista.map((elemento) => 3*elemento)
const ordena = (lista) => lista.sort((a, b) => a-b)

const composicao = (...funcoes) => (lista) =>
  funcoes.reduce((contador, funcao) => funcao(contador), lista)

const geraResultado = composicao(
  contagem,
  ordena,
  triplo
)

const nomes = ['Ana Beatriz', 'Bia', 'Guilherme', 'Joao', 'Rafael']

console.log(geraResultado(nomes))