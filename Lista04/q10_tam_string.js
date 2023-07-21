const tamanho = (string) => 
(string.charAt(0) === '') ? 0 : 
  1 + tamanho(string.slice(1))

const exemplo = "Quatro"

console.log(tamanho(exemplo))