const tipoTriangulo = ( a, b, c ) => {
  const iguaisABC = a==b && b==c
  const diferentesABC = a!=b && a!=c && b!=c
  if(iguaisABC) return 'Equilátero'
  else if(diferentesABC) return 'Escaleno'
  else return 'Isósceles'
}

const isTriangulo = (x, y, z) => { 
  const somaXY = x+y
  const somaXZ = x+z
  const somaYZ = y+z
  
  return (somaXY > z && somaXZ > y && somaYZ > x) 
}

const a = 7
const b = 7
const c = 6

if( isTriangulo(a, b, c) ) {
  console.log( `Triângulo ${tipoTriangulo( a, b, c )}.` )
} else console.log('Não é triângulo')



// const teste = isTriangulo(2, 3, 4)

// const texto = (t) => t == true ? `Os lados informados podem formar um triangulo` : `Esse triangulo nao existe`

// console.log(texto(teste))