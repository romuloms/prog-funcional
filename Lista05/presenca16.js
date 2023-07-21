const folclore = ['Lambe Sujos', 'Caboclinhos', 'Bacamarteiros', 'Cacumbi', 'Parafusos', 'Reisado', 'Chegança', 'Taieira']
const f = (acc, x) => acc + x
const g = (x) => x.match(/[aeiou]/gi)
const h = (acc) => acc + 1
const temp1 = folclore.reduce(f, '').split('')
console.log(temp1)
const temp2 = temp1.filter(g)
console.log(temp2)
const resultado = temp2.reduce(h, 0)
console.log(resultado)