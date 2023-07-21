function distanciaEntreDoisPontos( x1, y1, x2, y2 ) {
  const conteudo = ( x2-x1 )**2 + ( y2-y1 )**2
  const raiz = Math.sqrt( conteudo )

  return raiz
}

const pontos = distanciaEntreDoisPontos( 3, 4, 6, 6 )

console.log( `A distância entre os pontos é de ${pontos}` )