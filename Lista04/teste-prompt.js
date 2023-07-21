const prompt = require('prompt-sync')()
const r1 =  parseFloat(prompt('r1? '))
const r2 =  parseFloat(prompt('r2? '))

const fareaEli = (x, y, pi=3.14) => pi*x*y

const resultado = fareaEli(r1,r2)
console.log(`Área da elipse é ${resultado}!`)