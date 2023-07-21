// Q10. Defina uma função que, dada uma lista, retorne a (sub)lista contendo os elementos 
// que ocorrem exatamente uma vez na lista original. Exemplos: [4,2,1,3,2,3].unicos() ---> [4,1];
// [1,4,4,2,1,3,2,3].unicos() ---> []

const {indef} = require('./my_utils.js')

const elimina = ([x, ...xs]) => (valor) => {

    if(indef(x)) return []

    else if(x == valor) return elimina([...xs])(valor)
    
    else return [x, ...elimina([...xs])(valor)]
    
}

const unicos = ([x, ...xs]) => {

    if(indef(x)) return []

    else if([...xs].includes(x)) return unicos(elimina([x, ...xs])(x))
    
    else return [x, ...unicos([...xs])]

}

const lista = [4,2,1,3,2,3,5,5,6,2,6,7,0,2,0]

console.log(unicos(lista));
