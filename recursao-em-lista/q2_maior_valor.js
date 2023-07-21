// Q2. Criar uma função que encontre o maior valor numa lista de inteiros usando
//  a recursividade. Considere que a lista possui pelo menos um elemento.
const indef = x => typeof x == 'undefined'

const lista = [9,6,3,8]

function maior([x, y, ...xs]) {
    
    if(indef(y)) return x

    else {
        return (x > y) ? maior([x, ...xs]) : maior([y, ...xs])
    }

}

console.log(maior(lista));