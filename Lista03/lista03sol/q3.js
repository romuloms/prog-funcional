//Nesse caso, houve a necessidade de usar CHAVES e RETURN
//pois existem várias constantes internas auxiliares, o que
//faz com que o código ocupe mais de uma linha.
const podeSerTriangulo = (x) => (y) => (z) => {
    const somaXY = x+y
    const somaXZ = x+z
    const somaYZ = y+z
    return (somaXY > z && somaXZ > y && somaYZ > x)
}

//Experimente testar com outros valores
const l1 = 2
const l2 = 3
const l3 = 4

const teste = podeSerTriangulo(l1)(l2)(l3)

//Função auxiliar para ajudar a formar o texto de saída
//Nessa versão, usei a expressão condicional para evitar necessidade
//de chaves e returns.
const auxSN = (t) => t? '' : 'não'
const texto = `Lados ${l1}, ${l2} e ${l3} ${auxSN(teste)} podem formar um triângulo.`
console.log(texto)