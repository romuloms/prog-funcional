// const dec2 = (base) => (n) => {
//   if(base == 2) {
//     if(n == 0) {
//       return ""
//     }
//     const quociente = Math.floor(n/2)
//     const resto = (n%2)>0 ? 1 : 0

//     return dec2(2)(quociente) + resto.toString()
//   }
  
// }

// const emBinario = dec2(2)

// console.log(emBinario(26))

const decPara = (base) => (n) => {
  const baseReg = {
    2:'01', 
    8:'01234567',
    16:'0123456789abcdef'
  }
  if(n<base){
    return baseReg[base][n]
  }
  else{
    const quociente = Math.floor(n/base)
    const resto = n%base
    return decPara(base)(quociente)+`${baseReg[base][resto]}` 
  }
}

const decPara2 = decPara(2)
const decPara8 = decPara(8)
const decPara16 = decPara(16)

const val = 6
console.log(decPara2(val))
console.log(decPara8(val))
console.log(decPara16(val))