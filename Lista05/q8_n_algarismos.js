// retornar os n primeiros algarismos de um numero inteiro
const nAlgarismos = (n) => (num) => {
  const strNum = BigInt(num).toString()
  return strNum.slice(0, n)
}

const num1 = 5435304549
const num2 = 124
const num3 = 31041034035045345204529452
console.log(nAlgarismos(5)(num1))
console.log(nAlgarismos(2)(num2))
console.log(nAlgarismos(12)(num3))