const range = (start, end, step = 1) => {
  const allNumbers = [start, end, step].every(Number.isFinite)
  if (!allNumbers) {throw new TypeError('range() espera apenas números finitos como argumentos.')}
  // if (step <= 0) {throw new Error('passo deve ser um número maior que zero.')}
  if (start > end) {step = -step}
  const length = Math.floor(Math.abs((end - start) / step)) + 1
  return Array.from(Array(length), (x, index) => start + index * step)
}

const conta = (alg) => (n1) => (n2) => {
  const lista = range(n1,n2)
  const elementosParaString = lista.map((x)=>x.toString())
  const concatenarStrings = elementosParaString.reduce((acc,x)=>acc+x,'')
  const separaElementosIndividuais = concatenarStrings.split('')
  const arrayDoAlgarismo = separaElementosIndividuais.filter((x)=>x==alg)
  
  return arrayDoAlgarismo.length
}

console.log(conta(9)(1)(99))