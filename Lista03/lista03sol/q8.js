//Podemos aumentar o reuso da solução implementadando a 
//função 'potencia' e, depois, definimos as funções mais 
//específicas que quisermos a partir dela.
//Nesse caso, colocamos o parâmetro do expoente (e) como
//sendo o PRIMEIRO parâmetro pois, assim, podemos
//reutilizá-lo sem problemas na definição das demais funções.
const potencia = (e) => (b) => b**e

const quadrado = potencia(2)
const cubo = potencia(3)
const quarta = potencia(4)
const inverso = potencia(-1)

console.log(quadrado(-3))
console.log(quarta(-3))
console.log(inverso(-2))