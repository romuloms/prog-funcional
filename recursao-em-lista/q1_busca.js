// Q1. Criar uma função recursiva chamada busca que busca o índice de um determinado item em uma 
// lista ORDENADA. Se o item estiver presente, ele deve retornar o índice, caso contrário, deve retornar -1

const indef = x => typeof x == 'undefined'
// const soma = ([x, ...xs]) => indef(x) ? 0 : x + soma(xs)

const lista = [9,8,7,6]

const busca = ([x, ...xs], n, acc = 0) => {

    if(indef(x)) {
        return -1
    }
    
    else if(n == x) {
        return acc
    }

    else {
        return busca(xs, n, acc+1)
    } 

}

console.log(busca(lista, 7));
