// const range = (start, end, step = 1) => {
//   const allNumbers = [start, end, step].every(Number.isFinite)
//   if (!allNumbers) {throw new TypeError('range() espera apenas números finitos como argumentos.')}
//   if (step <= 0) {throw new Error('passo deve ser um número maior que zero.')}
//   if (start > end) {step = -step}
//   const length = Math.floor(Math.abs((end - start) / step)) + 1
//   return Array.from(Array(length), (x, index) => start + index * step)
// }

const range = (start, stop, step = 1) => 
  Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

console.log(range(-2,10));