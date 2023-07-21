// Q4. Função para retornar o número de vogais numa string. 
// Considere que todas as letras estão minúsculas.
const {indef} = require('./my_utils.js')


const nVogais = ([x, ...xs]) => {

    const regex = /[aeiou]/
    
    if(indef(x)) return 0

    else if(regex.test(x)) return 1 + nVogais(xs)

    else return nVogais(xs)

}

const string = 'romulo'

console.log(nVogais(string));


// conferir caractere por caractere se é uma vogal