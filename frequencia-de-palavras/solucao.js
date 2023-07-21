const fs = require('fs')
const path = require('path')

const caminhoArquivo = path.join(__dirname, 'dados1.txt')
const conteudo = fs.readFileSync(caminhoArquivo)

const conteudoString = conteudo.toString()
const re = /[a-z á-ú]/gi
const regex = (str) => str.match(re).join('')

const stringFiltrada = regex(conteudoString)

const splitString = (string, separador) => string.split(separador)

const arrayDeStrings = splitString(stringFiltrada, " ")
// console.log(arrayDeStrings);
const countedNames = arrayDeStrings.reduce((todasPalavras, palavra) => {
  const currCount = todasPalavras[palavra] ?? 0
  return {
    ...todasPalavras,
    [palavra]: currCount + 1,
  }
}, {})

console.log(countedNames)