const tamanho = (str) => (str == '') ? 0 : 1 + tamanho(str.slice(1)) 

console.log(tamanho("oito"))