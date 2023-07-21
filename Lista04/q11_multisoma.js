// const soma = (num) => {
//   if(num == 0) return 0
//   else return soma(num-1) + num
// }

// const multi = (x, y = 10) => {
//   if(y==0) return 0
//   else if(x==0) return 0
//   else {
//     return x*y + multi(x, y-1)
    
//   }
// }

// const multiSoma = (p) => multi(soma(p))

// console.log(multiSoma(3))


const multiSoma = (num, contador = 10) => (contador===0) ? 0 : 
  num * contador + multiSoma(num, contador-1)

console.log(multiSoma(5))
