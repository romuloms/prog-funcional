const somaModulos = (...params) => {
  const arr = [...params]
  const somaAbsoluta = arr.reduce((acc, item) => {
      if(item < 0) {
        return acc + item * -1
      }
      else {
        return acc + item
      }
    }, 0)

  return somaAbsoluta
}

console.log(somaModulos(-2, 3, -4, -5))