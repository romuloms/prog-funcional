const nomes = ['Ana','Bia','Marcela','Carlos','Maria']
console.log(`último nome: ${nomes[nomes.length-1]}`)
console.log(`penúltimo nome: ${nomes[nomes.length-2]}`)

// ou (solucao ruim):

const posicao = (pos) => (x) => nomes.indexOf(x) == (nomes.length+pos)
const ultimo = posicao(nomes.length)
const ultimoElemento = nomes.filter(ultimo)
console.log(ultimoElemento)
