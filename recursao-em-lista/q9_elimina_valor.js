// Q9. Função para eliminar de uma lista todas as ocorrências de um dado elemento.
// Exemplo: [-4,0,3,7,11].elimina(7) ---> [-4,0,3,11].

const {indef} = require('./my_utils.js')

const lista = [-4,0,3,7,3,11]

const elimina = ([x, ...xs]) => (valor) => {

    if(indef(x)) return []

    else if(x == valor) return elimina([...xs])(valor)
    
    else return [x, ...elimina([...xs])(valor)]
    
}

console.log(elimina(lista)(3));