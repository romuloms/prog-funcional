const {indef} = require('./my_utils')
const {inverte} = require('./inverte')

const list = [1,2,3,4,5,6,7]
const fib = [1,1,2,3,5,8,13,21]
const string = '1101'

const truncaSeq = (lista, n) => {

  const helper = ([x, ...xs], n, contador = lista.length) => {

    if(indef(x)) return []

    else if(lista.length < n) return []
    
    else if(n === contador) return []

    else return [x, ...helper(xs, n, contador - 1)]

  }
  
  return helper(lista, n)

}

// console.log(truncaSeq(list, 3));

const validaSeq = ([x, y, z, ...xs]) => {

  if(indef(x) || indef(y) || indef(z)) return true

  else if(x + y === z) return validaSeq([y, z, ...xs])

  else return false

}

// console.log(validaSeq(fib));

const mantenhaFiltro = (f) => ([x, ...xs]) => {

  if(!f(x)) return []
  
  else return [x, ...mantenhaFiltro(f)(xs)]

}

const f = (x) => x<3

// console.log(mantenhaFiltro(f)(list));

const bin2dec = ([x, ...xs], contador = [x, ...xs].length - 1) => {

  if(indef(x)) return 0

  else return x*(2**(contador)) + bin2dec(xs, contador-1)

}

console.log(bin2dec('0111111110'));

