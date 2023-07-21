const indef = x => typeof x === 'undefined'

const lista1 = [1,2,3]
const lista2 = [4,5]

// 1. A função mescla une duas listas já originalmente ordenadas,
// gerando uma única lista final também ordenada.

const mescla = ([x, ...xs], [y, ...ys]) => {

    if(indef(x)) return [y, ...ys]

    else if(indef(y)) return [x, ...xs]

    else if(y <= x) return [y, ...mescla([x, ...xs], ys)]

    else return [x, ...mescla(xs, [y, ...ys])]

}

// console.log(mescla(lista1, lista2));

// 2. A função de alta ordem doisAdois executa uma operação qualquer,
// f , passada como argumento sobre um par de elementos de duas listas
// também passadas como argumento, retornando uma lista única final
// contendo o resultado dessa operação.

const doisAdois = (f) => ([x, ...xs], [y, ...ys]) => {

    if(indef(x) || indef(y)) return []

    else return [f(x, y), ...doisAdois(f)(xs, ys)]

}

// 3. A função somaPares soma pares de elementos consecultivos da lista
// de entrada, retornando uma nova lista. Considere que a soma inicia
// com o elemento de valor zero e finaliza também com elemento de valor zero.

const somaPares = (lista) => {

    if(lista.length == 0) return []

    else {
        const helper = ([x, y, ...xs]) => {

            if(indef(y)) return []
    
            else return [x + y, ...helper([y, ...xs])]
    
        }
    
        return helper([0, ...lista, 0])
    }

}

// A função triangulo imprime o Triângulo de Pascal até a linha especificada
// no parâmetro (linha começa em 0). Obs: a função somaPares pode ajudar nessa solução.

const pascal = (ateLinha, lista = [1]) => {

    if(ateLinha == 0) return lista

    else return pascal(ateLinha-1, somaPares(lista))

}
// [1] ->(3) [1,1] -> (2) [1,2,1] -> (1) [1,3,3,1] -> (0) lista
const triangulo = (ateLinha) => {

    if(ateLinha == 0) return `${pascal(0)}`

    else return `${triangulo(ateLinha-1)}\n${pascal(ateLinha)}`

}

console.log(triangulo(2));