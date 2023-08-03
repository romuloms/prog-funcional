function distanciaEntreDoisPontos(x1, y1, x2, y2) {
  const retaComum = (x2-x1)**2 + (y2-y1)**2
  const paralelaAx = (x2-x1)**2
  const paralelaAy = (y2-y1)**2
  
  if (x1==x2)
    return Math.sqrt(paralelaAy)
  
  else if (y1==y2)
    return Math.sqrt(paralelaAx)

  else
    return Math.sqrt(retaComum)

}

const pontos = distanciaEntreDoisPontos(3, 4, 6, 6)

console.log(pontos)