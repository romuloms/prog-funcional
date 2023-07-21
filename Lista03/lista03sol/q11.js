const media3 = (x) => (y) => (z) => (x+y+z)/3

const maior = (x) => (m) => (x>m)? 1 : 0

const a = 7
const b = 7 
const c = 9 

//A estratégia aqui foi criar uma função que retorna 1
//se um valor for maior que média. Dessa forma, evita-se 
//vários "ifs".
const media = media3(a)(b)(c)
const total = maior(a)(media) + maior(b)(media) + maior(c)(media)

//O caracter '\n' representa 'quebra de linha'. Com isso, 
//conseguimos colocar quebra de linhas dentro do texto de saída.
console.log(`Quantos maiores que a média entre ${a}, ${b} e ${c}?\nResp: ${total}`)