const contRaiz = ( x1, y1, x2, y2 ) => ( x2-x1 )**2 + ( y2-y1 )**2
const raiz = (conteudo) => Math.sqrt( conteudo )

console.log( `A distância entre os pontos é de ${raiz(contRaiz(3, 4, 6, 6))}` )