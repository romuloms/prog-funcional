const indef = x => typeof x == 'undefined'

lista = [1,2,3,4,[4,[2,2]]]

const soma = ([x, ...xs]) => {

    if(indef(x)) return 0
    else if(!(x instanceof Array)) return x + soma(xs)
    else return soma(x) + soma(xs)

}

console.log(soma(lista));