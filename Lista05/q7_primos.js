// primos menores que um número natural n
const primo = (num, num2 = 1) => {
  if(num2 == num) return 1
  else if(num%num2 == 0) return 1 + primo(num, num2+1)
  else return primo(num, num2+1)
}

// const verifica = (f, n) => f(n) == 2 ? true : false 

const n = 100
const arrayN = Array.from(
  Array(n), (_, i) => i + 1
  ).filter((i) => primo(i) === 2 ? true : false)

console.log(arrayN)