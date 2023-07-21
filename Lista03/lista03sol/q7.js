const menor = (x) => (y) => x<y? x : y

const a = -3
const b = 0 
const c = 9

//Observe que não é necessário criar uma função
//para comparar três valores. Basta reaproveitar
//a função de comparação entre dois valores quantas
//vezes desejar para comparar muitos valores e descobrir
//o menor.
const menorDosTres = menor(a)(menor(b)(c)) 
console.log(`Menor dos três ${menorDosTres}`)

//É possível reutilizar a função menor (ou maior) para definir outras. 
//Um exemplo interessante é definir a função ReLU (Rectified Linear Unit),que é 
//muito usada em modelos de Aprendizado de Máquina Profundo (Inteligência Artificial)
//O valor dela é igual ao valor passado caso este seja positivo e é igual
//a 0 (zero) quando é negativo. 
//Para isso, vamos definir a função MAIOR semelhante à menor e depois reutilizá-la.
const maior = (x) => (y) => x>y? x : y
const maiorDosTres = maior(a)(maior(b)(c)) 
console.log(`Maior dos três: ${maiorDosTres}`)

//Função reLU
const reLU = maior(0)
console.log(`reLU: ${reLU(a)}`)