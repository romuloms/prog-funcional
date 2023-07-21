const {indef} = require('./my_utils.js')

const montante = ([x, ...xs], acc = 0) => {

    // const copia = lista

    if(indef(x)) return []

    else {
        const segX = x + acc
        return [segX, ...montante(xs, segX)]
    }

}

const lista = [7,3,19,5,15,10]

console.log(montante(lista));