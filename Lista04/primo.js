const primo = (num, num2 = 1) => {
  if(num2 == num) return 1
  else if(num%num2 == 0) return 1 + primo(num, num2+1)
  else return primo(num, num2+1)
}

const verifica = (f) => (n) => f(n) == 2 ? "é primo" : "não é primo" 

const isPrimo = verifica(primo)

console.log(isPrimo(47))