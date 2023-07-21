//Observe que para essa lista, tenho desagregado os parâmetros
//e, assim, viabilizo aplicação independente dos argumentos.
const areaCirc = (x) => (pi=3.14) => pi*(x**2)

const raio = 5.0

//Segundo argumento vazio, significa usar o default
//pré-definido no parâmetro: 3.14
console.log(areaCirc(raio)())
console.log(areaCirc(raio)(3.1415926535))