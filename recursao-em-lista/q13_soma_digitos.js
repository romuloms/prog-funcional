// Q13. Crie uma função que pega um número e retorna um dígito que é o resultado da soma de
// todos os dígitos do número de entrada. Quando a soma dos dígitos resultar em mais de um dígito,
// repita a soma até obter um único dígito. Exemplos: digitosoma(123) ➞ 6, digitosoma(999888777) ➞ 72 ➞ 9,
// digitosoma(999999999998) ➞ 107 ➞ 8.

const value = 999888777

const digitsSum = (val) => {

    const str = String(val)
    const arr = str.split('')
    const sum = arr.reduce((acc, elem) => parseInt(acc) + parseInt(elem), 0)

    if(sum.toString().length < 2) return sum

    else return digitsSum(sum)

}

console.log(digitsSum(value));