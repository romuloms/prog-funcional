const lista = [1,3,2,6,4,8]

const func = (lista) => lista.filter((item, indice) => !(item % 2) && !(indice % 2))
                      // o filter retorna 0 && 0, ou seja, falso e falso
// const func = (lista) => lista.filter((item, indice) => (item % 2 == 0) && (indice % 2) == 0)
// forma mais explícita

console.log(func(lista))