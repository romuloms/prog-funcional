const siglaTexto = (string) => {
  const palavras = string.split(' ')
  const soMaiusculas = palavras.filter((x) => x[0] == x[0].toUpperCase())
  const sigla = soMaiusculas.reduce((acc, elem) => acc + elem[0], '')

  return sigla
}

console.log(siglaTexto('Universidade Federal de Sergipe'));