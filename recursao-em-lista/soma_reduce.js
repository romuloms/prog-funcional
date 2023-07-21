const list = [3,8,20,21,34,44]

function somaReduce(lista, soma = 0) {
    if(lista.length == 0) 
        return 0
    else 
        soma += lista[0]
        return somaReduce(lista.slice(1)) + soma
}

console.log(somaReduce(list));
console.log(list.reduce((acc, i) => acc + i));

// console.log(list.slice(1));

const indef = x => typeof x == 'undefined'
const soma = ([x, ...xs]) => indef(x) ? 0 : x + soma(xs)

console.log(soma(list));

console.log([x, ...xs] = list)