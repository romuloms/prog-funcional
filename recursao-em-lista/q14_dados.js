/**
 * Q14. Crie um programa para representar um joguinho de dados simples.
 *  O usuário escolhe quantas vezes ele deseja jogar um par de dados. A pontuação
 *  será a soma total de todos os lançamentos. Entretanto, se algum lançamento
 *  gerar um valor duplo, a pontuação total será zerada. Represente o lançamento de
 *  cada par de dados como uma lista com dois elementos e o conjunto total de lançamentos
 *  seria então uma lista de listas. Exemplos: pontuacao([[5, 2], [4, 3], [5, 6]]) ➞ 25,
 *  pontuacao([[5, 6], [1, 1], [6, 4], [6, 3]]) ➞ 0.
 */

const indef = x => typeof x == 'undefined'

const getRandomInt = () => Math.floor(Math.random() * 6 + 1)

const throwDice = (n) => {

    if(n == 0) return []

    else return [[getRandomInt(), getRandomInt()], ...throwDice(n-1)]

}

const getPoints = ([x, ...xs]) => {
    
    const checkEquals = (acc,[x,...xs]) => {

        if(indef(x)) return acc

        const [y0,y1] = x
        const pontos = acc+y0+y1

        if(y0===y1) return 0
        else return checkEquals(pontos,xs)
        
    }
    
    return checkEquals(0,[x, ...xs])

}
const dado = throwDice(4)
console.log(dado);
console.log(getPoints(dado));
