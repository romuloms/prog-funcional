function bhaskara(a, b, c) {
  //const formula = a*(x**2) + b*x + c
  if(delta<0) return undefined
  const delta = b**2 - (4*(a*c))
  const raizSoma = (-b + Math.sqrt(delta))/(2*a)
  const raizSubtracao = (-b - Math.sqrt(delta))/(2*a)

  // console.log(delta)
  console.log(raizSoma)
  console.log(raizSubtracao)

}

const valores = bhaskara(1, -5, 6)