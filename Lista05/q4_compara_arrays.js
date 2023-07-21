const nomes1 = ['Ana','Bia','Marcela','Carlos','Maria']
const nomes2 = ['Bia', 'João', 'Marcela', 'Carlos', 'Camila']

const compara = (lista1, lista2) => lista1.filter( elemento => 
  lista2.includes(elemento) )

console.log(compara(nomes1, nomes2))

const lista1 = [3,4,1,-2,0]
const lista2 = [3,8,-4,-2,0,9]
console.log(compara(lista1, lista2))

const numeroDeElementosIguais = (l1, l2) => compara(l1,l2).length
console.log(numeroDeElementosIguais(nomes1, nomes2))
console.log(numeroDeElementosIguais(lista1, lista2))
