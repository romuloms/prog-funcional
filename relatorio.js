// media, desvio padrão, incerteza A, incerteza B, incerteza combinada
const indef = x => typeof(x) == 'undefined'

function media([x,...xs]) {
  return ([x, ...xs].reduce((acc, item) => acc+item,0))/[x, ...xs].length
}

function variancia([x, ...xs]) {
  if(indef(x)) return 0
  return (((x - media(lista))**2)) + variancia(xs)
}

function desvPadrao(x) {
  return Math.sqrt(variancia(x)/(lista.length - 1))
}

function incertezaA(x) {
  return desvPadrao(x)/(Math.sqrt(lista.length))
}

function incertezaC(x) {
  return Math.sqrt(incertezaA(x)**2 + incertezaB**2)
}

const incertezaB = 0.00001
const lista = [0.4217, 0.4040, 0.4197, 0.4033, 0.4120]

console.log(`média: ${media(lista)}`);
console.log(`desvio padrão: ${desvPadrao(lista)}`);
console.log(`incerteza do tipo A: ${incertezaA(lista)}`);
console.log(`incerteza do tipo B: ${incertezaB}`);
console.log(`incerteza do tipo C: ${incertezaC(lista)}`);
