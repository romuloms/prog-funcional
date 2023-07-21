const distancia = (x1) => (y1) => (x2) => (y2) => { 
    //Função Math.abs é pré-definida de Javascript
    //e serve para retornar o módulo de um valor
    //Função Math.sqrt calcula a raiz quadrada
    const x1x2 = Math.abs(x1-x2)
    const y1y2 = Math.abs(y1-y2)
    if (x1 == x2) return y1y2 //paralela à ordenada
    else if (y1 == y2) return x1x2 //paralela à abscissa 
    else return Math.sqrt(x1x2**2 + y1y2**2) //ou seja, hipotenusa
}

//Pontos de exemplo
const p1x = 3
const p1y = 4
const p2x = 12
const p2y = 0

const resultado = distancia(p1x)(p1y)(p2x)(p2y)
console.log(`Distância entre os pontos é ${resultado}.`)

//É possível criar novas funções derivadas da
//função de distancia original. Veja abaixo, por exemplo,
//uma função que mede a distancia de um ponto (x,y)
//à origem dos eixos do plano cartesiano, ou seja, ponto (0,0).
//Observe que ao ser usada dentro do console.log, essa nova função
//só precisa de dois argumentos para funcionar!
const distOrigem = distancia(0)(0)
console.log(`Distância do ponto (${p1x},${p1y}) à origem é ${distOrigem(p1x)(p1y)}.`)