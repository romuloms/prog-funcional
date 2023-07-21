const ta = 0
const xa = 500 
const tb = 30
const xb = 2000

const velocidade = (t) => (x) => (t0=0) => (x0=0) => (x-x0)/(t-t0)

//Ao usar funções na forma de expressões, é importante sempre
//lembrar que ao usar os valores 'default' dos parâmetros
//definidos pela função, faz-se necessário de qualquer forma, 
//adicionar os respectivos argumentos ainda que sejam vazios.
//Observe este comportamento no exemplo abaixo.
console.log(velocidade(tb)(xb)()())