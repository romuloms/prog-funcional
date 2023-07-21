const isTriangulo = (x, y, z) => { 
  const somaXY = x+y
  const somaXZ = x+z
  const somaYZ = y+z
  
  return (somaXY > z && somaXZ > y && somaYZ > x) 
}

const teste = isTriangulo(2, 3, 4)

const texto = (t) => t == true ? `Os lados informados podem formar um triangulo` : `Esse triangulo nao existe`

console.log(texto(teste))