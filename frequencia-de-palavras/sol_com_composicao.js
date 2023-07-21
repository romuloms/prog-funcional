const fs = require('fs')
const path = require('path')

const caminhoArquivo = path.join(__dirname, 'dados1.txt')
const conteudo = fs.readFileSync(caminhoArquivo)

const re = /[a-z á-ú]/gi

const paraString = (txt) => txt.toString()
const regex = (str) => str.match(re).join('')
const splitString = (separador) => (string) => string.split(separador)
const contagem = (array) => array.reduce((todasPalavras, palavra) => {
  const currCount = todasPalavras[palavra] ?? 0
  return {
    ...todasPalavras,
    [palavra]: currCount + 1,
  }
}, {})

const ordemAlfabetica = (array) => array.sort()
// const total = (array) => array.reduce((contador, item) => contador + array.item, 0)

const composicao = (...fns) => (lista) => fns.reduce((acc,fn) => fn(acc), lista)

const geraResultado = composicao(
    paraString,
    regex,
    splitString(" "),
    ordemAlfabetica,
    contagem,
    // total
)

console.log(geraResultado(conteudo))