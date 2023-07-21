const inverte = (string) => (index = string.length - 1) => {
  if(index <= -1) return ""
  else {
    return string[index] + inverte(string)(index - 1)
  }
}

const palindromo = (string) => {
  
  if(string.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/gi, '') == 
    inverte(string.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/gi, ''))()) {
    return true
  }
  else return false
}

const texto = 'Aí, Lima falou: “Olá, família!”.'

console.log(texto.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/gi, ''))
console.log(palindromo(texto))