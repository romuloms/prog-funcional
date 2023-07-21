const f = (a) => (b) => `${b}, ${a}.`
const n1 = 'John'
const n2 = 'Nash'
console.log(f(n1)(n2))