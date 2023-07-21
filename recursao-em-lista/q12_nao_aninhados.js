// Q12. A propriedade length de uma lista retorna o número de elementos presentes na lista.
// Por exemplo, a lista [1, [2, 3]] possui 2 elementos: o número 1 e a lista [2, 3].
// Suponha que ao invés disso, queiramos saber o total de elementos não aninhados na lista.
// No exemplo anterior, então, teríamos 3 elementos: números 1, 2 e 3. Escreva uma função para
// realizar esta última contagem.

const {indef} = require('./my_utils.js')

const unravel = ([x, ...xs]) => {
    if(indef(x)) return []

    else if(Array.isArray(x)) {
        return unravel([...x, ...xs])
    }
    else if(Array.isArray(xs)) return [x, ...unravel([...xs])]
}

const myLength = (arr) => unravel(arr).length

const list = [[[[[1,[[2]]]]]],[3,4], [5,[[[[[[[[[6,[[[[7,8,9,[10]]]]]]]]]]]]]]]]

console.log(myLength(list));
console.log(unravel(list));