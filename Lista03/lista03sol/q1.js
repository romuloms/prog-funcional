//Observe que ao representar funções como expressões,
//não se faz necessário utilizar a palavra reservada
//RETURN, nem abre e fecha CHAVES, caso todo o cálculo
//se resuma a uma única linha.
const areaRet = (x) => (y) => x*y

const l1 = 6.1
const l2 = 4.4

console.log(areaRet(l1,l2))