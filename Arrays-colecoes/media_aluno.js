const aluno = {
  "notas": [4, 7.5, 9.5]
}

console.log(aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length)